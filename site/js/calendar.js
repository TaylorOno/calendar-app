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

function addEventToCalendar(event) {
  if (!event) return;

  let isAndroid = /Android/i.test(navigator.userAgent);
  let start = event.start;
  let end = event.end || new Date(start.getTime() + 60 * 60 * 1000);

  if (isAndroid) {
    let googleCalendarUrl = new URL("https://calendar.google.com/calendar/render");
    googleCalendarUrl.searchParams.set("action", "TEMPLATE");
    googleCalendarUrl.searchParams.set("text", event.title);
    googleCalendarUrl.searchParams.set("dates", formatCalendarDate(start) + "/" + formatCalendarDate(end));
    googleCalendarUrl.searchParams.set("details", event.extendedProps.description || "");
    googleCalendarUrl.searchParams.set("location", event.extendedProps.location || "");
    window.open(googleCalendarUrl.toString(), "_blank");
    return;
  }

  let icsStart = event.allDay
      ? start.toISOString().slice(0, 10).replace(/-/g, "")
      : formatCalendarDate(start);
  let icsEnd = event.allDay
      ? new Date(end.getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10).replace(/-/g, "")
      : formatCalendarDate(end);
  let ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Calendar Widget//EN",
    "BEGIN:VEVENT",
    "UID:" + Date.now() + "@calendar-widget",
    (event.allDay ? "DTSTART;VALUE=DATE:" : "DTSTART:") + icsStart,
    (event.allDay ? "DTEND;VALUE=DATE:" : "DTEND:") + icsEnd,
    "SUMMARY:" + escapeCalendarText(event.title),
    "DESCRIPTION:" + escapeCalendarText(event.extendedProps.description),
    "LOCATION:" + escapeCalendarText(event.extendedProps.location),
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
  let blob = new Blob([ics], {type: "text/calendar;charset=utf-8"});
  let downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = event.title.replace(/[^a-z0-9]/gi, "-").toLowerCase() + ".ics";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(downloadLink.href);
}
