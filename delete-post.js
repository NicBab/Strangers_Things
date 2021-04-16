
async function deletePost(postId) {
    try {
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

$('#delete-button').on('click', async function () {
    console.log("hi")
    const postElement = $(this).closest('.post');
    const post = postElement.data('post');

    try {
        const result = await remove(post.id);
        postElement.slideUp()
    } catch(error) {
      console.error(error)
    }
});

// $("#delete-button").on("click", function(e) {
//     e.preventDefault
//     console.log(hi)
// })



// $('#edit-post').show();

// async function deletePost(postId) {
//     const url = `${BASE_URL}/posts/${postId}`;
//     fetch(url, {
//         method: "DELETE",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${userToken}`
//         }
//     }) .then(response => response.json())
//         .then(result => {
//         console.log(result);
//     })
//     .catch(console.error);
// }