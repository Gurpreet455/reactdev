function toggleMenu() {
    const navLinks = document.querySelector('.burg');
    const burger = document.querySelector('.burger');
    
    // Toggle the 'open' class on .burg and .burger
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
}

// Close the mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.burg a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.burg');
        const burger = document.querySelector('.burger');
        
        // Close the menu by removing the 'open' class
        navLinks.classList.remove('open');
        burger.classList.remove('open');
    });
});

