// Select the menu icon and navbar elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Check if the menu icon and navbar elements are found
if (menuIcon && navbar) {
    // Function to handle the menu icon click event
    const handleMenuClick = () => {
        // Toggle the 'bx-x' class on the menu icon
        menuIcon.classList.toggle('bx-x');
        // Toggle the 'active' class on the navbar
        navbar.classList.toggle('active');
    };

    // Function to handle the window scroll event
    const handleWindowScroll = () => {
        // Remove the 'bx-x' class from the menu icon
        menuIcon.classList.remove('bx-x');
        // Remove the 'active' class from the navbar
        navbar.classList.remove('active');
    };

    // Attach the click event listener to the menu icon
    menuIcon.addEventListener('click', handleMenuClick);

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleWindowScroll);
} else {
    console.error('Menu icon or navbar element not found.');
}
