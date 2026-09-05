/**
 * Upcoming Events Module
 * Dynamically displays the next 10 scheduled events based on the current date.
 */

/**
 * Formats a start and optional end date string into a human-readable format.
 *
 * @param {string} startStr - The ISO or date string representing event start.
 * @param {string} [endStr] - The ISO or date string representing event end.
 * @returns {string} Formatted date range or single date string.
 */
function formatEventDate(startStr, endStr) {
    if (!startStr) {
        return '';
    }

    const startDate = new Date(startStr);
    if (isNaN(startDate.getTime())) {
        return startStr;
    }

    const isAllDay = !startStr.includes("T");
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: '2-digit' };

    if (isAllDay) {
        return startDate.toLocaleDateString(undefined, dateOptions);
    }

    const datePart = startDate.toLocaleDateString(undefined, dateOptions);
    const startTimePart = startDate.toLocaleTimeString(undefined, timeOptions);

    if (!endStr) {
        return `${datePart}, ${startTimePart}`;
    }

    const endDate = new Date(endStr);
    if (isNaN(endDate.getTime())) {
        return `${datePart}, ${startTimePart}`;
    }

    const endTimePart = endDate.toLocaleTimeString(undefined, timeOptions);
    const isSameDay = startDate.toDateString() === endDate.toDateString();

    if (isSameDay) {
        return `${datePart}, ${startTimePart} - ${endTimePart}`;
    }

    const endDatePart = endDate.toLocaleDateString(undefined, dateOptions);
    return `${datePart}, ${startTimePart} - ${endDatePart}, ${endTimePart}`;
}

/**
 * Calculates the effective end Date object for an event.
 * If an explicit end date is provided, parses it.
 * If it is an all-day event without an explicit end date, defaults to the end of that day.
 * Otherwise, defaults to the start date.
 *
 * @param {Object} event - The event object.
 * @param {Date} startDate - The parsed start Date of the event.
 * @returns {Date} The calculated end Date.
 */
function getEventEndDate(event, startDate) {
    if (event.end) {
        const parsedEnd = new Date(event.end);
        if (!isNaN(parsedEnd.getTime())) {
            return parsedEnd;
        }
    }

    if (!event.start.includes("T")) {
        return new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 23, 59, 59, 999);
    }

    return startDate;
}

/**
 * Filters and sorts upcoming events relative to a reference date.
 *
 * @param {Array<Object>} [eventList] - Array of event objects (defaults to global events).
 * @param {Date|string|number} [currentDate=new Date()] - Reference date to filter upcoming events against.
 * @param {number} [limit=10] - Maximum number of upcoming events to return.
 * @returns {Array<Object>} Sorted list of upcoming events up to the specified limit.
 */
function getUpcomingEvents(eventList = (typeof events !== 'undefined' ? events : []), currentDate = new Date(), limit = 10) {
    if (!Array.isArray(eventList)) {
        return [];
    }

    const now = currentDate instanceof Date ? currentDate : new Date(currentDate);

    const upcoming = eventList.filter(event => {
        if (!event || !event.start) {
            return false;
        }

        const startDate = new Date(event.start);
        if (isNaN(startDate.getTime())) {
            return false;
        }

        const endDate = getEventEndDate(event, startDate);
        return endDate >= now;
    });

    upcoming.sort((a, b) => new Date(a.start) - new Date(b.start));

    return upcoming.slice(0, limit);
}

/**
 * Dispatches an event to the calendar handler function if available.
 *
 * @param {Object} event - The event data to add to the calendar.
 */
function handleAddToCalendar(event) {
    if (typeof addEventToCalendar !== 'function') {
        return;
    }

    const start = new Date(event.start);
    const end = event.end ? new Date(event.end) : undefined;

    addEventToCalendar({
        title: event.title,
        start: start,
        end: end,
        allDay: !event.start.includes("T"),
        extendedProps: {
            description: event.description || '',
            location: event.location || '',
            category: event.category || ''
        }
    });
}

/**
 * Creates and returns the DOM element representing an individual event card.
 *
 * @param {Object} event - The event data object.
 * @returns {HTMLElement} The card article element.
 */
function createEventCard(event) {
    const card = document.createElement('article');
    card.className = 'upcoming-event-card';

    const eventColor = event.color || '#002868';
    card.style.borderLeftColor = eventColor;

    const header = document.createElement('div');
    header.className = 'upcoming-event-header';

    const title = document.createElement('h3');
    title.className = 'upcoming-event-title';
    title.textContent = event.title || 'Untitled Event';
    header.appendChild(title);

    if (event.category) {
        const category = document.createElement('span');
        category.className = 'upcoming-event-category';
        category.textContent = event.category;
        category.style.backgroundColor = eventColor;
        category.style.color = '#FFFFFF';
        header.appendChild(category);
    }

    card.appendChild(header);

    const dateEl = document.createElement('p');
    dateEl.className = 'upcoming-event-date';
    dateEl.textContent = formatEventDate(event.start, event.end);
    card.appendChild(dateEl);

    if (event.location) {
        const locationEl = document.createElement('p');
        locationEl.className = 'upcoming-event-location';
        locationEl.textContent = `Location: ${event.location}`;
        card.appendChild(locationEl);
    }

    if (event.description) {
        const descEl = document.createElement('div');
        descEl.className = 'upcoming-event-description';
        descEl.innerHTML = event.description;
        card.appendChild(descEl);
    }

    const actions = document.createElement('div');
    actions.className = 'upcoming-event-actions';

    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.className = 'upcoming-event-add-btn';
    addBtn.textContent = 'Add to calendar';
    addBtn.addEventListener('click', () => handleAddToCalendar(event));

    actions.appendChild(addBtn);
    card.appendChild(actions);

    return card;
}

/**
 * Renders the list of upcoming event cards into the specified container element.
 *
 * @param {HTMLElement} container - The DOM container element where cards will be rendered.
 * @param {Array<Object>} upcomingEvents - Array of upcoming event objects.
 */
function renderUpcomingEvents(container, upcomingEvents) {
    if (!container) {
        return;
    }

    container.innerHTML = '';

    if (!upcomingEvents || upcomingEvents.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.className = 'no-upcoming-events';
        emptyMsg.textContent = 'No upcoming events scheduled at this time.';
        container.appendChild(emptyMsg);
        return;
    }

    const listWrapper = document.createElement('div');
    listWrapper.className = 'upcoming-events-cards';

    upcomingEvents.forEach(event => {
        listWrapper.appendChild(createEventCard(event));
    });

    container.appendChild(listWrapper);
}

/**
 * Retrieves the global events array if defined.
 *
 * @returns {Array<Object>} The array of events, or an empty array if not defined.
 */
function loadEventsData() {
    if (typeof events !== 'undefined' && Array.isArray(events)) {
        return events;
    }
    return [];
}

/**
 * Initializes the upcoming events section by finding the container,
 * retrieving events, and rendering the upcoming events list.
 */
function initUpcomingEvents() {
    const listContainer = document.getElementById('upcoming-events-list');
    if (!listContainer) {
        return;
    }

    try {
        const allEvents = loadEventsData();
        const upcoming = getUpcomingEvents(allEvents, new Date(), 10);
        renderUpcomingEvents(listContainer, upcoming);
    } catch (error) {
        console.error('Error loading upcoming events:', error);
        listContainer.innerHTML = '<p class="no-upcoming-events">Unable to load upcoming events.</p>';
    }
}

/**
 * Sets up the event listener or immediately triggers initialization based on document ready state.
 */
function setupUpcomingEvents() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initUpcomingEvents);
        return;
    }
    initUpcomingEvents();
}

setupUpcomingEvents();
