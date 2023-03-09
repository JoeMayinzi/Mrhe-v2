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
