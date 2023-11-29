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

// Toggle Dark-Light Modes
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    const toggleButton = document.getElementById('mode-toggle');

    if (toggleButton) {
        toggleButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
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

// Hide on click/select
function hideOnClick(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.addEventListener("click", function() {
      this.style.display = "none";
    });
  }
}

// On click/select elements
hideOnClick("myElement");

// Animated Typing/Text Function
function typeLetters(typedText, phrases) {
    let phraseIndex = 0;
    let letterIndex = 0;

    function type() {
        if (letterIndex < phrases[phraseIndex].length) {
            typedText.textContent += phrases[phraseIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(type, 200); // Typing speed
        } else {
            setTimeout(() => {
                typedText.textContent = "";
                letterIndex = 0;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                type();
            }, 2000); // Pause between phrases
        }
    }

    type();
}

// Combined DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Navigation and Section Display
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            hideAllSections();
            showSection(link.getAttribute('href').substring(1));
        });
    });

    // Nav Toggle
    var navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            var navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.classList.toggle('active');
            }
        });
    }

    // Lazy Loading Images
    if ("IntersectionObserver" in window) {
        const lazyImages = document.querySelectorAll('img.lazy');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => observer.observe(img));
    }

    // Set initial mode
    setInitialMode();

    // Hover Effects (Placeholder)
    document.querySelectorAll('.hover-effect').forEach(item => {
        item.addEventListener('mouseover', () => {
            // Change styles or content
        });
        item.addEventListener('mouseout', () => {
            // Revert styles or content
        });
    });

    // Initiate typing animation
    const typedTextElement = document.getElementById('typing-animation');
    if (typedTextElement) {
        typeLetters(typedTextElement, ["Yo!", "Hey!", "What's Up!"]);
    }
});
