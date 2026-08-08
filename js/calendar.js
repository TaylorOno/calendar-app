function formatCalendarDate(date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function escapeCalendarText(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

function addEventToCalendar(selectedEvent) {
  if (!selectedEvent) return;

  var isAndroid = /Android/i.test(navigator.userAgent);
  var start = selectedEvent.start;
  var end = selectedEvent.end || new Date(start.getTime() + 60 * 60 * 1000);

  if (isAndroid) {
    var googleCalendarUrl = new URL("https://calendar.google.com/calendar/render");
    googleCalendarUrl.searchParams.set("action", "TEMPLATE");
    googleCalendarUrl.searchParams.set("text", selectedEvent.title);
    googleCalendarUrl.searchParams.set("dates", formatCalendarDate(start) + "/" + formatCalendarDate(end));
    googleCalendarUrl.searchParams.set("details", selectedEvent.extendedProps.description || "");
    googleCalendarUrl.searchParams.set("location", selectedEvent.extendedProps.location || "");
    window.open(googleCalendarUrl.toString(), "_blank");
    return;
  }

  var icsStart = selectedEvent.allDay
    ? start.toISOString().slice(0, 10).replace(/-/g, "")
    : formatCalendarDate(start);
  var icsEnd = selectedEvent.allDay
    ? new Date(end.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10).replace(/-/g, "")
    : formatCalendarDate(end);
  var ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Calendar Widget//EN",
    "BEGIN:VEVENT",
    "UID:" + Date.now() + "@calendar-widget",
    (selectedEvent.allDay ? "DTSTART;VALUE=DATE:" : "DTSTART:") + icsStart,
    (selectedEvent.allDay ? "DTEND;VALUE=DATE:" : "DTEND:") + icsEnd,
    "SUMMARY:" + escapeCalendarText(selectedEvent.title),
    "DESCRIPTION:" + escapeCalendarText(selectedEvent.extendedProps.description),
    "LOCATION:" + escapeCalendarText(selectedEvent.extendedProps.location),
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  var blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = selectedEvent.title.replace(/[^a-z0-9]/gi, "-").toLowerCase() + ".ics";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(downloadLink.href);
}
