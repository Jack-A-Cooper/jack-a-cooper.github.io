document.addEventListener('DOMContentLoaded', function() {
    // Hide and Show Sections
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var sectionId = this.getAttribute('href').substring(1);
            hideAllSections();
            showSection(sectionId);
        });
    });

    // Nav Toggle Function
    var navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            var navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.classList.toggle('active');
            }
        });
    }

    // Lazy Loading for Images
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

    // Hover Effects
    document.querySelectorAll('.hover-effect').forEach(item => {
        item.addEventListener('mouseover', () => {
            // Change styles or content
        });
        item.addEventListener('mouseout', () => {
            // Revert styles or content
        });
    });

    // Set the initial mode based on localStorage
    setInitialMode();
});

// Animated Typing/Text
const typedText = document.getElementById('typing-animation');
const phrases = ["Yo!", "Hey!", "What's Up!"];
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

