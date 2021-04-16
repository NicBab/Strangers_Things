let postId

const editPost = async (postId) => {
    try {
        const response = await fetch (`${BASE_URL}/posts/${postId}`, {
            method: 'PATCH',
            headers: {
                "Content-type": 'application.json',
                "Authorization": 'localStorage.getItem',
            },
            body: JSON.stringify(requestBody),
        })
        const data = response.json()
        console.log(data)
        window.location.reload()
    } catch (e) {
      console.error(e);
    }
};





// const addListeners = () => {
//     $('.write-post-btn').on('click', function () {
//         window.location.href = 'submit.html';
//     });

//     $('edit-icon').on('click', function () {
//         const cardData = $(this).closest('.card').data('post');
//         const postId = cardData._id;
//         $('#edit-post').show();
//     });

//     $('edit-post-btn').on('click', () => {
//         const requestBody = {
//             title: $('#edit-post-title').val(),
//         }
//         editPost(requestBody);
//     });
// }

