let answers = document.querySelectorAll(".accordion__question");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});

const menu = document.querySelector(".header__mobile");
const hamburger = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeIcon");
const openMenu = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("menu-active")) {
    menu.classList.remove("menu-active");
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
  } else {
    menu.classList.add("menu-active");
    closeMenu.style.display = "block";
    openMenu.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu)

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("circle")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }