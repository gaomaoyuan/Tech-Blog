const deleteButton = document.querySelector('#delete-button');

deleteButton.addEventListener('click', async () => {
    const postId = document.querySelector('#post-id').value;

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post.');
    }
});
