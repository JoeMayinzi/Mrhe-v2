const newsletterButton = document.getElementById("newsletterButton");
const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", (Event) => {
  Event.preventDefault();
  console.log("prevent contact loading");
});

newsletterButton.addEventListener("click", (Event) => {
  Event.preventDefault();
  console.log("prevent page loading on click");
});

function openNav() {
  document.getElementById("mySidenav").style.width = 100 + "%";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
