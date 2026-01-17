// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // Adjust to avoid navbar overlap
        behavior: "smooth"
    });
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation (you can expand this)
    if (name && email && message) {
        alert("Thank you for reaching out, we will get back to you shortly!");
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all the fields.");
    }
});

