
function validateRegistration(event) {
    event.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;
 
    if (regUsername.length < 3 || regPassword.length < 6) {
        alert('Invalid registration details. Username should be at least 3 characters, and password should be at least 6 characters.');
    } else {
        
        const existingData = JSON.parse(localStorage.getItem('userData')) || {};

   
        if (existingData[regUsername]) {
            alert('Username already exists. Please choose a different username.');
        } else {
          
            existingData[regUsername] = regPassword;
            localStorage.setItem('userData', JSON.stringify(existingData));

            alert('Registration successful! Redirecting to login page.');
            // Redirect to login page
            window.location.href = 'login.html';
        }
    }
}

 
function validateLogin(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    
    const storedData = JSON.parse(localStorage.getItem('userData')) || {};

     
    if (storedData[loginUsername] === loginPassword) {
        alert('Login successful!');
        
        window.location.href = 'index.html';
    } else {
        alert('Invalid login credentials.');
    }
}


