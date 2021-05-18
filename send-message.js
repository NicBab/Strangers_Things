function sendMessage() {
  const url = `${BASE_URL}/posts/${postId}/messages`;
  const userToken = localStorage.getItem("token")
    fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${userToken}` 
    },
    body: JSON.stringify({
      message: {
        content: "Do you still have this?  Would you take $10 less?"  // form .val()
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}

    //Message send submit btn  
      $('#items-post').on('click', "#message-button", async function (e) {
    console.log("**message")
  //click mssg makes modal visible
    });


    //make html modal
    //click mssg makes modal visible
    //modal form
    //submit btn
    //close btn




    // const postElement = $(this).closest('.card');
    // const post = postElement.data('post');
    // try {
    //   e.preventDefault();
    //   let message = $("#message-modal").val();
    //   console.log(message)
    //   await message(message);

    // } catch(error) {
    //   console.error(error)
    // }
    