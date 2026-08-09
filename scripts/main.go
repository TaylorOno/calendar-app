package main

import (
	"encoding/csv"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"
	"time"
)

type Event struct {
	Title       string `json:"title"`
	Start       string `json:"start"`
	End         string `json:"end"`
	Description string `json:"description"`
	Location    string `json:"location"`
	Color       string `json:"color,omitempty"`
	Category    string `json:"category,omitempty"`
}

func main() {
	csvURL := os.Getenv("CSV_URL")
	if len(csvURL) == 0 {
		log.Fatal("CSV_URL environment variable is not set")
	}

	outputFile := flag.String("output", "js/events.js", "Path to output JS file")
	flag.Parse()

	if len(flag.Args()) > 0 {
		*outputFile = flag.Args()[0]
	}

	log.Printf("Downloading Events")
	resp, err := http.Get(csvURL)
	if err != nil {
		log.Fatalf("Error downloading CSV: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Fatalf("Error downloading CSV: status code %d", resp.StatusCode)
	}

	events, err := parseCSV(resp.Body)
	if err != nil {
		log.Fatalf("Error parsing CSV: %v", err)
	}

	err = writeJSFile(*outputFile, events)
	if err != nil {
		log.Fatalf("Error writing output file: %v", err)
	}

	fmt.Printf("Updated %s with %d approved events.\n", *outputFile, len(events))
}

func parseCSV(r io.Reader) ([]Event, error) {
	reader := csv.NewReader(r)
	records, err := reader.ReadAll()
	if err != nil {
		return nil, err
	}

	if len(records) == 0 {
		return nil, nil
	}

	headers := records[0]
	idxEventName := -1
	idxDescription := -1
	idxLocation := -1
	idxStartTime := -1
	idxEndTime := -1
	idxApproved := -1
	idxEventType := -1

	for i, h := range headers {
		h = strings.ToLower(strings.TrimSpace(h))
		switch h {
		case "event name":
			idxEventName = i
		case "description":
			idxDescription = i
		case "location":
			idxLocation = i
		case "start time":
			idxStartTime = i
		case "end time":
			idxEndTime = i
		case "approved":
			idxApproved = i
		case "event type":
			idxEventType = i
		}
	}

	var events []Event
	for i := 1; i < len(records); i++ {
		row := records[i]
		if idxApproved != -1 {
			status := strings.ToLower(strings.TrimSpace(row[idxApproved]))
			if status != "yes" && status != "true" && status != "approved" && status != "1" {
				continue
			}
		}

		event := Event{}
		if idxEventName != -1 {
			event.Title = strings.TrimSpace(row[idxEventName])
		}
		if idxDescription != -1 {
			event.Description = strings.ReplaceAll(strings.TrimSpace(row[idxDescription]), "\n", "<br>")
		}
		if idxLocation != -1 {
			event.Location = strings.TrimSpace(row[idxLocation])
		}
		if idxStartTime != -1 {
			event.Start = formatDateTime(row[idxStartTime])
		}
		if idxEndTime != -1 {
			event.End = formatDateTime(row[idxEndTime])
		}
		if idxEventType != -1 {
			event.Category = strings.TrimSpace(row[idxEventType])
			event.Color = fmt.Sprintf("var(--%s)", strings.ToLower(row[idxEventType]))
		}

		events = append(events, event)
	}

	return events, nil
}

func formatDateTime(s string) string {
	s = strings.TrimSpace(s)
	// Try parsing MM/DD/YYYY HH:MM:SS
	// Go reference time: Mon Jan 2 15:04:05 MST 2006
	layout := "1/2/2006 15:04:05"
	t, err := time.Parse(layout, s)
	if err != nil {
		// Try without seconds
		layout2 := "1/2/2006 15:04"
		t, err = time.Parse(layout2, s)
		if err != nil {
			return s // Return as is if parsing fails
		}
	}
	return t.Format("2006-01-02T15:04:05")
}

func writeJSFile(path string, events []Event) error {
	jsonData, err := json.MarshalIndent(events, "", "    ")
	if err != nil {
		return err
	}

	content := fmt.Sprintf("const events = %s;\n", string(jsonData))
	return os.WriteFile(path, []byte(content), 0644)
}
