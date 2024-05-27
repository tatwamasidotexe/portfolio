window.addEventListener("load", function() {
    document.querySelector('#landing-section .row h1').classList.add('show');
    document.querySelector('#landing-section .row h3').classList.add('show');
    document.querySelector('#landing-section .row p').classList.add('show');
});
window.addEventListener('scroll', function(e) {
    // Get the amount scrolled along the Y-axis
    var scrollY = window.scrollY;
    
    // If scrolling along the Y-axis, prevent the default scroll behavior
    if (scrollY !== 0) {
        e.preventDefault();
        // Manually scroll the page along the X-axis
        window.scrollBy(scrollY, 0);
    }
});

let svgElements = document.querySelectorAll('#sq-svg');

        svgElements.forEach(svg => {
        let randomRotateDuration = Math.random() * (10 - 2) + 2;
        let randomTranslateDuration = Math.random() * (20 - 5) + 5;
        
        svg.style.animationDuration = randomTranslateDuration + 's';
        let animateTransform = svg.querySelector('animateTransform');
        animateTransform.setAttribute('dur', randomRotateDuration + 's');
});

document.addEventListener('wheel', function(event) {
    const sections = document.querySelectorAll('.section');
    let currentSection = Math.round(window.scrollY / window.innerHeight);

    if (event.deltaY > 0) {
        // Scrolling down
        if (currentSection < sections.length - 1) {
            currentSection++;
        }
    } else {
        // Scrolling up
        if (currentSection > 0) {
            currentSection--;
        }
    }

    window.scrollTo({
        top: sections[currentSection].offsetTop,
        behavior: 'smooth'
    });

    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var navbarToggler = document.querySelector('.navbar-toggler');
    
    navbarToggler.addEventListener('click', function () {
        console.log('clicked')
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('navbar-expanded');
        } else {
            navbar.classList.remove('navbar-expanded');
            navbar.classList.add('bg-transparent');
        }
    });

    // Optional: Remove class when collapse hides automatically
    document.querySelector('.navbar-collapse').addEventListener('hidden.bs.collapse', function () {
        navbar.classList.remove('navbar-expanded');
    });
});