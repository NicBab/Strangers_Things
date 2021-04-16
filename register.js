
    //Register username to api *Sign-Up*
function register(username, password) {
    const url = `${BASE_URL}/users/register`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${userToken}`
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setToken(result.data.token);
      })
      .catch(console.error);
  };
  function setToken(token) {
    localStorage.setItem("token", token);
  }
  function getToken() {
    return localStorage.getItem("token");
  }
    //Register submit button
  $("#register-btn").on("click", async function (e) {
    e.preventDefault();
    let username = $("#inputUsernameRegister").val();
    let password = $("#inputPasswordRegister").val();
    await register(username, password);
  });


  