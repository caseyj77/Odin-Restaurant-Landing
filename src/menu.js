export const showMenu = (function() {
  return function() {
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = '<h1>Menu Page</h1>'; // Clears the previous content and sets the title

      const menuItem = [
          {
            title: "Spaghetti Bolognese",
            directions: "Boil pasta. Cook ground beef with tomato sauce and spices. Mix and serve.",
            image: "https://images.pexels.com/photos/3908197/pexels-photo-3908197.jpeg"
          },
          {
            title: "Caesar Salad",
            directions: "Chop lettuce. Add croutons, Caesar dressing, and grated Parmesan cheese. Toss and serve.",
            image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg"
          },
          {
            title: "Chocolate Cake",
            directions: "Mix flour, sugar, cocoa, baking powder, eggs, and milk. Bake in a preheated oven at 350°F for 30 minutes. Let cool and serve.",
            image: "https://images.pexels.com/photos/14493566/pexels-photo-14493566.jpeg"
          }
      ];

      // Loop through each item in the menuItem array
      menuItem.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';

          const title = document.createElement('h2');
          title.textContent = item.title;

          const directions = document.createElement('p');
          directions.textContent = item.directions;

          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.title; // Good practice to include an alt attribute
          image.style.maxWidth = '300px'; // Ensures the image does not exceed 300px width
          image.style.maxHeight = '300px'; // Ensures the image does not exceed 300px height

          card.appendChild(title);
          card.appendChild(directions);
          card.appendChild(image);

          contentDiv.appendChild(card);
      });
  };
})();
