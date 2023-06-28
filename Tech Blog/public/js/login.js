document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        console.error('Login failed');
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
    });
  });
  