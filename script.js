//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("checkbox");
    const submitButton = document.getElementById("submit");
    const existingUserButton = document.getElementById("existing");

    // Check if credentials are saved in localStorage
    if (localStorage.getItem("username")) {
        existingUserButton.style.display = "block";
    }

    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        alert("Logged in as " + username);

        if (rememberMeCheckbox.checked) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", passwordInput.value);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });

    existingUserButton.addEventListener("click", () => {
        alert("Logged in as " + localStorage.getItem("username"));
    });
});
