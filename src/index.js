import _ from 'lodash';


console.log('it is working');

// IIFE to set the background of all pages
(function() {
    document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/4589169/pexels-photo-4589169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
})();


// adds the welcome message to the home page
(function welcomeMessage() {
    const contentDiv = document.getElementById('content');

    const myHeading = document.createElement('h1');
    myHeading.textContent = 'Welcome to the Salt and Pepper Bistro';
    contentDiv.appendChild(myHeading);
    
    const p = document.createElement('p');
    p.textContent = 'Salt and Pepper Bistro offers a warm, farm-to-table experience where every breakfast is made from the freshest local meats and vegetables, ensuring a nourishing start to your day. Our lunch menu follows suit, celebrating the best of the season\'s bounty with rustic yet refined dishes that showcase our commitment to local sourcing. Come join us and savor the true flavors of our community!';
    contentDiv.appendChild(p);
})();

function menu() {
    const menuButton = document.getElementById('menu');
    menuButton.addEventListener('click', function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Clear the content inside the div
        console.log('Content cleared!');
    });

    const menuButton = document.getElementById('about');
    menuButton.addEventListener('click', function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Clear the content inside the div
        console.log('Content cleared!');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    menu();
});
