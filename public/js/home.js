// home.js

// Add event listener to the new article form submission
document.getElementById('newArticleForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    // Make an AJAX request to the server to create a new article
    fetch('/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    })
    .then(response => {
      if (response.ok) {
        // Reload the page after successfully creating the article
        window.location.reload();
      } else {
        console.error('Error creating article');
      }
    })
    .catch(error => {
      console.error('Error creating article:', error);
    });
  });
  
  // Add event listener to the comment buttons
  const commentButtons = document.querySelectorAll('.comment-button');
  commentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const articleId = this.getAttribute('data-article-id');
      const commentsDiv = document.getElementById(`comments-${articleId}`);
  
      // Prompt the user to enter a comment
      const comment = prompt('Enter your comment:');
  
      // Make an AJAX request to the server to add the comment
      fetch(`/articles/${articleId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ comment })
      })
      .then(response => {
        if (response.ok) {
          // Reload the comments section after successfully adding the comment
          commentsDiv.innerHTML = ''; // Clear existing comments
          fetch(`/articles/${articleId}/comments`)
            .then(response => response.json())
            .then(data => {
              data.forEach(comment => {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
                  <p>${comment.content}</p>
                  <p>Posted by: ${comment.author}</p>
                `;
                commentsDiv.appendChild(commentDiv);
              });
            })
            .catch(error => {
              console.error('Error loading comments:', error);
            });
        } else {
          console.error('Error adding comment');
        }
      })
      .catch(error => {
        console.error('Error adding comment:', error);
      });
    });
  });
  