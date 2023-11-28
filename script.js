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
            event.preventDefault(); // Prevent default link behavior
            var sectionId = this.getAttribute('href').substring(1); // Get section ID
            hideAllSections();
            showSection(sectionId);
        });
    });
});
