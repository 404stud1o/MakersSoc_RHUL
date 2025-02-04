function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "3kM4?0c5UH1r"; // password

    if (password === correctPassword) {
        // Redirect to home
        window.location.href = "home.html"; // Rediects to page
    } else {
        alert("Incorrect passcode. Access denied.");
    }
}