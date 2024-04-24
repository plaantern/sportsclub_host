const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        loginMessage.textContent = 'Please fill in both username and password.';
        return;
    }

    // Replace with your actual data.json fetch logic
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const foundUser = data.find(user => user.username === username);

            if (foundUser) {
                // Securely compare passwords using a suitable hashing algorithm (e.g., bcrypt)
                // Replace with your secure password comparison logic
                if (password === foundUser.password) {
                    // Login successful! Redirect to next page
                    window.location.href = 'success.html'; // Or handle login success differently
                } else {
                    loginMessage.textContent = 'Incorrect password.';
                }
            } else {
                loginMessage.textContent = 'Username not found.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            loginMessage.textContent = 'An error occurred. Please try again later.';
        });
});
