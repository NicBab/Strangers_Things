
    //Fetch user posts from api
const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'GET',
        headers: {
          "Content-Type": 'application/json',
          "Authorization": `Bearer ${userToken}`
        },
      });
      const data = await response.json();
      return data.data.posts;
    } catch(err){
      console.error(err);
    }
  };

  //Render post html>>
  const renderPostHTML = (post) => {
    return $(`
      <div class="card" id="postCards">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: ${post.price}</li>
          <li class="list-group-item">${post.location}</li>
          <li class="list-group-item">Post by: ${post.author.username}</li>
        </ul>
        <div class="card-links">
          <button type="button" id="message-button" class="btn btn-primary btn-sm">Send Message</button>
          <button type="button" id="edit-button" class="btn btn-secondary btn-sm">Edit</button>
          <button type="button" id="delete-button" class="btn btn-secondary btn-sm">Delete</button>
        </div>
      </div>
  `).data("post", post);
  };

    //Loop over posts and append rendered html to page *Item Posts*
    (async () => {
      const posts = await fetchPosts()
      posts.forEach((post) => {
          $("#items-post").prepend(renderPostHTML(post));
      })
  })()

