async function deletePost(postId) {
    try {
        const userToken = localStorage.getItem("token")
        const response = await fetch (`${BASE_URL}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${userToken}`
            }
        })
        const data = await response.json();
        return data;
    } catch(error) {
      throw error
    }
};

$('#items-post').on('click', "#delete-button", async function () {
    
    const postElement = $(this).closest('.card');
    const post = postElement.data('post');
    try {
        const result = await deletePost(post._id);
        postElement.slideUp()

    } catch(error) {
      console.error(error)
    }
});
