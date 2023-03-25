const newsletterButton = document.getElementById("newsletterButton");
const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", (Event) => {
  Event.preventDefault();
  console.log("contact btn doesn't load ");
});

newsletterButton.addEventListener("click", (Event) => {
  Event.preventDefault();
});

function openNav() {
  document.getElementById("mySidenav").style.width = 100 + "%";
  console.log(document.body);
  document.body.style.overflowY = "hidden";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  console.log(document.getElementById("mySidenav"));
  console.log("close nav");
}
