 console.log("script running");
// Check if the user is authenticated
const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

// Get the navbar links
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const logoutLink = document.getElementById('logout-link');
const transactionLink = document.getElementById('transaction-link');

// Update the navbar based on the user's authentication status
if (isAuthenticated) {
  registerLink.style.display = 'none';
  loginLink.style.display = 'none';
  logoutLink.style.display = 'block';
  transactionLink.style.display = 'block';
} else {
  registerLink.style.display = 'block';
  loginLink.style.display = 'block';
  logoutLink.style.display = 'none';
  transactionLink.style.display = 'none';
}

// Set the user's authentication status when they log in or log out


function logout() {
  localStorage.setItem('isAuthenticated', 'false');
  location.reload();
}



document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from default behaviour
    logout(); // Call the logout function
    location.href = '/';
});