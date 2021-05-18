

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


