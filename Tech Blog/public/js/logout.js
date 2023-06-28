document.getElementById('logout').addEventListener('click', function() {
    fetch('/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        console.error('Logout failed');
      }
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
  });
  