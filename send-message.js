function sendMessage() {
  const url = `${BASE_URL}/posts/${postId}/messages`;
    fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TOKEN_STRING_HERE'
    },
    body: JSON.stringify({
      message: {
        content: "Do you still have this?  Would you take $10 less?"
      }
    })
  }).then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(console.error);
}
    //Message send submit btn
    $("#message-btn").on("click", async function (e) {
        e.preventDefault();
        let message = $("#message-modal").val();
        console.log(message)
        await message(message);
      });