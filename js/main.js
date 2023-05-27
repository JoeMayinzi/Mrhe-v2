const newsletterButton = document.getElementById("newsletterButton");
const contactButton = document.getElementById("contactButton");
const newsletterForm = document.querySelectorAll(".news-letter-form");

newsletterButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    "Kami button newsletter ezo recharger te tia nga kimia naza piaka euh"
  );
});

contactButton.addEventListener("click", (Event) => {
  Event.preventDefault();
  console.log("contact btn doesn't load ");
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
  document.body.style.overflowY = "visible";
}
