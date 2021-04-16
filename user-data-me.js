
    //Grab user data
function userData() {
    const url = `${BASE_URL}/users/me`;
    fetch(url, {
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


