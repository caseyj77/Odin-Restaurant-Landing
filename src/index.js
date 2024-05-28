import _ from 'lodash';
import { showMenu } from './menu.js';
import { showAbout } from './about.js';

console.log('it is working');

// IIFE to set the background of all pages and attach event listeners
(function() {
    // Set background image
    document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/4589169/pexels-photo-4589169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    // Function to add the welcome message to the home page
    function welcomeMessage() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Clear existing content

        const myHeading = document.createElement('h1');
        myHeading.textContent = 'Welcome to the Salt and Pepper Bistro';
        contentDiv.appendChild(myHeading);
        
        const p = document.createElement('p');
        p.textContent = 'Salt and Pepper Bistro offers a warm, farm-to-table experience where every breakfast is made from the freshest local meats and vegetables, ensuring a nourishing start to your day. Our lunch menu follows suit, celebrating the best of the season\'s bounty with rustic yet refined dishes that showcase our commitment to local sourcing. Come join us and savor the true flavors of our community!';
        contentDiv.appendChild(p);
    }

    document.addEventListener('DOMContentLoaded', function() {
        const homeButton = document.getElementById('home');
        const menuButton = document.getElementById('menu');
        const aboutButton = document.getElementById('about');

        // Load home content by default
        welcomeMessage();

        homeButton.onclick = welcomeMessage;
        menuButton.onclick = showMenu;
        aboutButton.onclick = showAbout;
    });
})();
