const newsletterButton = document.getElementById("newsletterButton");
const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", (Event) => {
  Event.preventDefault();
});

newsletterButton.addEventListener("click", (Event) => {
  Event.preventDefault();
});

function openNav() {
  document.getElementById("mySidenav").style.width = 100 + "%";
  console.log(document.body);
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
