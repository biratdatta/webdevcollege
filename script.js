 // Function to validate and store registration details
function validateRegistration(event) {
    event.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    // Basic validation (you can add more complex validation)
    if (regUsername.length < 3 || regPassword.length < 6) {
        alert('Invalid registration details. Username should be at least 3 characters, and password should be at least 6 characters.');
    } else {
        // Retrieve existing data from localStorage
        const existingData = JSON.parse(localStorage.getItem('userData')) || {};

        // Check if the username already exists
        if (existingData[regUsername]) {
            alert('Username already exists. Please choose a different username.');
        } else {
            // Store registration details in localStorage
            existingData[regUsername] = regPassword;
            localStorage.setItem('userData', JSON.stringify(existingData));

            alert('Registration successful! Redirecting to login page.');
            // Redirect to login page
            window.location.href = 'login.html';
        }
    }
}

// Function to validate login details
function validateLogin(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored registration details from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData')) || {};

    // Basic validation (you can add more complex validation)
    if (storedData[loginUsername] === loginPassword) {
        alert('Login successful!');
        // Redirect to another HTML page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid login credentials.');
    }
}
