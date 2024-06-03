export const showAbout = (function() {
    return function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<h1>About Page</h1>'; // Clear and add new content
        // Additional menu-specific content can be added here

        const aboutText = document.createElement('p');
        aboutText.textContent = 'In the heart of the bustling city, the Salt and Pepper Bistro stands as a testament to the shared passion of Emily and Thomas, a dynamic husband-and-wife team. With backgrounds in culinary arts and hospitality management, respectively, they embarked on a culinary journey that led to the creation of their own restaurant. Inspired by their travels across the globe and their love for exploring diverse culinary traditions, Emily and Thomas envisioned a place where every dish would tell a unique story. The Salt and Pepper Bistro became their canvas, painting flavors from the Mediterranean coasts to the spice-laden markets of Southeast Asia. Their primary goal was to introduce their patrons to a world of flavors that could transcend the usual dining experience. At Salt and Pepper Bistro, Emily and Thomas integrate unique spice combinations that challenge the palate while bringing people together in a shared adventure of taste. They meticulously craft their menu to include dishes that are both familiar and exotic, ensuring a harmonious blend of comfort and excitement in every bite. This commitment to diversity not only in their menu but also in the ambiance of their bistro, mirrors their belief in food\'s power to unite cultures and create lasting memories around the table.';
        contentDiv.appendChild(p);

    };
})();
