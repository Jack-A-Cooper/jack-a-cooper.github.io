// Function to hide all sections
function hideAllSections() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}

// Function to show a specific section
function showSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}

// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var sectionId = this.getAttribute('href').substring(1);
            hideAllSections();
            showSection(sectionId);
        });
    });
});

// Nav Toggle Function
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navToggle').addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        } else {
            navbar.classList.add('active');
        }
    });
});

// Dark-Light Modes Toggle
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    const toggleButton = document.getElementById('mode-toggle');

    if (toggleButton) {
        toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    // Save the current mode to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Set the initial mode based on localStorage
function setInitialMode() {
    const currentMode = localStorage.getItem('theme');
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        const toggleButton = document.getElementById('mode-toggle');
        if (toggleButton) {
            toggleButton.textContent = 'Switch to Light Mode';
        }
    }
}

// Event listener for the toggle button
document.getElementById('mode-toggle').addEventListener('click', toggleDarkMode);

// Set the initial mode on page load
setInitialMode();

// Lazy Loading for performance
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hover-effect').forEach(item => {
    item.addEventListener('mouseover', () => {
        // Change styles or content
    });
    item.addEventListener('mouseout', () => {
        // Revert styles or content
    });
});

// Animated Typing/Text
const typedText = document.getElementById('typing-animation');
const phrases = ["Phrase 1", "Phrase 2", "Phrase 3"];
let phraseIndex = 0;
let letterIndex = 0;

function typeLetters() {
    if (letterIndex < phrases[phraseIndex].length) {
        typedText.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetters, 200); // Typing speed
    } else {
        setTimeout(() => {
            typedText.textContent = "";
            letterIndex = 0;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeLetters();
        }, 2000); // Pause between phrases
    }
}

typeLetters();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animated Functions
// Courtesy of W3Schools: https://www.w3schools.com/howto/howto_js_animate_icons.asp
function chargebattery() {
    var a;
    a = document.getElementById("battery-animation");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
    }, 4000);
}

function hourglass() {
  var a;
  a = document.getElementById("hourglass-animation");
  a.innerHTML = "&#xf251;";
  setTimeout(function () {
      a.innerHTML = "&#xf252;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf253;";
    }, 2000);
}

typeLetters();

chargebattery();
setInterval(chargebattery, 5000);

hourglass();
setInterval(hourglass, 3000);
