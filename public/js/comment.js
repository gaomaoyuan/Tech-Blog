const commentForm = document.querySelector('#comment-form');

commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const content = document.querySelector('#content').value.trim();
    const postId = document.querySelector('#post-id').value;

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content, postId }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to comment.');
        }
    }
});
