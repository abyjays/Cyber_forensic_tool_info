function showAlert(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert("Message sent!");
    // Here you can add code to actually send the form data if needed
    document.getElementById("contactForm").reset(); // Optional: reset the form
}