document.getElementById('login-form').addEventListener('submit', function(event) {
    alert("Login successful!");
    event.preventDefault(); // Prevent the form from submitting
    login(); // Call the login function
    this.submit(); // Submit the form programmatically after login
});
function login() {
    localStorage.setItem('isAuthenticated', 'true');
    location.reload();
  }