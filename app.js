(() => {})()

const BASE_URL = "https://strangers-things.herokuapp.com/api/2101-LSU-RM-WEB-PT";
const userToken = localStorage.getItem("token")

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
    await search(search);
  });






  


