export const showMenu = (function() {
    return function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '<h1>Menu Page</h1>';
        
        const menuItem = [
            {
              title: "Spaghetti Bolognese",
              directions: "Boil pasta. Cook ground beef with tomato sauce and spices. Mix and serve.",
              image: "path/to/spaghetti-bolognese.jpg"
            },
            {
              title: "Caesar Salad",
              directions: "Chop lettuce. Add croutons, Caesar dressing, and grated Parmesan cheese. Toss and serve.",
              image: "path/to/caesar-salad.jpg"
            },
            {
              title: "Chocolate Cake",
              directions: "Mix flour, sugar, cocoa, baking powder, eggs, and milk. Bake in a preheated oven at 350°F for 30 minutes. Let cool and serve.",
              image: "path/to/chocolate-cake.jpg"
            }
          ];
    };
})();
