document.addEventListener("DOMContentLoaded", () => {
    // Simulated user data
    const users = [
        { username: "admin", password: "admin123" },
        { username: "user", password: "password123" },
    ];

    // DOM Elements
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginError = document.getElementById("login-error");

    // Handle login
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Check if user exists
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Redirect to main page (you can change the URL)
            window.location.href = "main.html";
        } else {
            // Show error message
            loginError.classList.remove("hidden");
        }
    });
});
