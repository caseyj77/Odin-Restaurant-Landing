export const showAbout = (function() {
    return function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<h1>About Page</h1>'; // Clear and add new content
        // Additional menu-specific content can be added here
    };
})();
