export const showMenu = (function() {
  return function() {
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = '<h1>Menu Page</h1>'; // Clears the previous content and sets the title

      const menuItem = [
        {
          "title": "Spaghetti Bolognese",
          "description": "Savor the rich flavors of al dente pasta entwined with a hearty Bolognese sauce, featuring tender ground beef simmered in a robust tomato base, seasoned with a blend of aromatic spices. A classic dish that's both comforting and utterly delicious.",
          "image": "https://images.pexels.com/photos/3908197/pexels-photo-3908197.jpeg"
        },
        {
          "title": "Caesar Salad",
          "description": "Indulge in the crisp freshness of chopped romaine lettuce, combined with crunchy croutons, creamy Caesar dressing, and a generous sprinkle of freshly grated Parmesan cheese. This Caesar Salad is a delightful blend of textures and flavors, perfect for any meal.",
          "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg"
        },
        {
          "title": "Chocolate Cake",
          "description": "Dive into a slice of this decadent chocolate cake, crafted from a smooth batter infused with rich cocoa and sweet sugar. Baked to perfection and moist in every bite, it's a chocolate lover's dream, best enjoyed with a dollop of whipped cream or a scoop of vanilla ice cream.",
          "image": "https://images.pexels.com/photos/14493566/pexels-photo-14493566.jpeg"
        }        
      ];

      // Loop through each item in the menuItem array
      menuItem.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';

          const title = document.createElement('h2');
          title.textContent = item.title;

          const description = document.createElement('p');
          description.textContent = item.description;

          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.title; // Good practice to include an alt attribute
          image.style.maxWidth = '300px'; // Ensures the image does not exceed 300px width
          image.style.maxHeight = '300px'; // Ensures the image does not exceed 300px height


          card.appendChild(title);
          card.appendChild(description);
          card.appendChild(image);

          contentDiv.appendChild(card);
      });
  };
})();
