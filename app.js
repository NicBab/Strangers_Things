(() => {})()

const BASE_URL = "https://strangers-things.herokuapp.com/api/2101-LSU-RM-WEB-PT";
const userToken = localStorage.getItem("token")
// const postId = "60667b727d73340017dad645"
console.log('This is the user token', userToken)


//Append menu sections to show on page when clicked
function setActive(sectionNumber) {
  $(".content .active, .dropdown-item").removeClass("active");
  $(
    `[data-section=${sectionNumber}], [data-link-to=${sectionNumber}]`
  ).addClass("active");
};
  $(".dropdown-item").click(function () {
    const sectionNumber = $(this).data("link-to");
    setActive(sectionNumber);
  });
  $(document).ready(function () {
    const activeSection = window.location.hash
      ? window.location.hash.substring(1)
      : "1";
    setActive(activeSection);
  });


  //search bar
  $("#search-bar-btn").on("click", async function (e) {
    e.preventDefault();
    let search = $("#search-bar-input").val();
    console.log(search)
    await search(search);
  });






// //Search bar 
//   let state = {
//     posts: [],
//     searchTerm: '',
//   }
  
//   function renderPostList(postList) {
//     // renders, doesn't care about what's in postList
//   }
  
//   function postMatches(post, text) {
//     // return true if any of the fields you want to check against include the text
//     // strings have an .includes() method 
//   }
  
//   let filteredPosts = state.posts.filter(post => postMatches(post, state.searchTerm));
//   renderPostList(filteredPosts) // only renders posts which pass postMatches
  


