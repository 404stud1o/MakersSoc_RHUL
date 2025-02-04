// function toggleVisibility() {
//     const passwordField = document.getElementById("password");
//     const toggleButton = document.getElementById("togglePassword");
    
//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//         toggleButton.textContent = "👁️" ; //char code &#x1F441; // Visible state
//     } else {
//         passwordField.type = "password";
//         toggleButton.textContent = "&#x1F441;"; // Hidden state
//     }
// }

function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "3kM4?0c5UH1r"; // password

    if (password === correctPassword) {
        // Redirect to home
        window.location.href = "home.html"; // Rediects to page
    } else {
        alert("Incorrect passcode. Access denied.");
        passwordField.value = ""; // Clear the input field
        passwordField.focus();    // Optional: Refocus on the input
    }
}