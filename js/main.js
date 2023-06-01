const newsletterButton = document.getElementById("newsletterButton");
const contactButton = document.getElementById("contactButton");
const newsletterForm = document.querySelectorAll(".news-letter-form");
const navLink = document.querySelectorAll(".nav-link");
const path = window.location.href;
const tabs = document.querySelectorAll(".tabs button");
const tabscontent = document.querySelectorAll(".tabs-content .container");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabscontent.forEach((content) => {
      content.classList.remove("activeTabs");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("activeTabs");
    });

    tabscontent[index].classList.add("activeTabs");
    tabs[index].classList.add("activeTabs");
  });
});

navLink.forEach((currentLink) => {
  if (currentLink.href === path) {
    currentLink.classList.add("activeLink");
  }
});

newsletterButton.addEventListener("click", (e) => {
  e.preventDefault();
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
