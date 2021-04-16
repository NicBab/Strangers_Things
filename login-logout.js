
    //login with username from api *Log-In*
function login(username, password) {
    alert('You have logged in!');
    const url = `${BASE_URL}/users/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        console.log(result, 'this is the login result');
        setToken(result.data.token);
      })
      .catch(console.error);
  };

    //Register submit btn
  $("#log-in-btn").on("click", async function (e) {
    e.preventDefault();
    let username = $("#inputUsernameLogin").val();
    let password = $("#inputPasswordLogin").val();
    console.log(username, password)
    await login(username, password);
  });

  
  //Logout user
function logout() {
    alert('You have logged out!')
  };
    //Logout submit btn
  $("#Log-Out").on("click", async function (e) {
    e.preventDefault(); //clear token in local storage
    const token = localStorage.getItem("token")
    localStorage.removeItem("token")
    let username = $("#inputUsernameLogin").val();
    let password = $("#inputPasswordLogin").val();
    await logout(username, password);
  });

