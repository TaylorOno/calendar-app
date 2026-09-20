const taglines = [
    "It's like a jungle sometimes it makes me wonder <br> how I keep from going under.",
    "What's your plan for tomorrow?<br> Are you a leader or will you follow?",
    "Just because you're going forward <br> doesn't mean I'm going backwards.",
    "If you're ever in a tough situation <br> We'll be there without hesitation."
];

function initTagLine() {
    const taglineElement = document.getElementById('tagline');
    if (!taglineElement) {
        return;
    }

    taglineElement.innerHTML = taglines[Math.floor(Math.random() * taglines.length)]
}

/**
 * Sets up the event listener or immediately triggers initialization based on document ready state.
 */
function setupTagLine() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTagLine);
        return;
    }
    initTagLine();
}

setupTagLine();