

    //Grab user data
    async function userData() {
      const BASE_URL = 'http://clever-neumann-583.herokuapp.com/posts'
      const url = `${BASE_URL}/users/me`;
      const userToken = localStorage.getItem("token")
      await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
    }).then(response => response.json())
      .then(result => {
          console.log(result)
      })
      .catch(console.error);
    };

//User Create Sell Item Post
async function createItemPost(postObj) {
  try {
    const BASE_URL = 'http://clever-neumann-583.herokuapp.com/posts'
    const url = `${BASE_URL}/posts`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify({
        post: postObj
      }),
    });
    const newPost = await response.json();
    return newPost;
  } catch (error) {
    throw error;
  }
}

//submit sell-item-form
$("#sell-item-form").on("submit", async function (event) {
  event.preventDefault();
  const postObj = {
    title: $(".post-title").val(),
    description: $(".post-description").val(),
    price: $(".post-price").val(),
    willDeliver: false
  };
  try {
    const newPost = await createItemPost(postObj);
    console.log(newPost.data.post)
    $("#items-post").prepend(renderPostHTML(newPost.data.post));
    $("#sell-item-form").trigger("reset");
  } catch (error) {
    console.error(error);
  }
});

