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

document.querySelectorAll("#cards, #cards1").forEach(container => {
  container.onmousemove = e => {
    for (const card of container.getElementsByClassName("circle")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  };
});




/*function createSquares() {
  const numSquares = 100;
  const background = document.getElementById('background');

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.left = `${Math.random() * 99}%`;
    square.style.animationDuration = `${Math.random() * 3 + 1}s`;
    background.appendChild(square);
  }
}

window.onload = function() {
  createSquares();
};*/


const marquees = [...document.querySelectorAll('.marque')];

marquees.forEach((marquee) => {
    marquee.innerHTML += ' '.repeat(5);
    marquee.style.position = 'relative'; // Изменение позиции на relative для правильного отображения анимации
    marquee.i = 0;
    marquee.step = 3;
    marquee.width = marquee.clientWidth; // Удаление +1 для корректного отображения анимации
    marquee.innerHTML = `${marquee.innerHTML}&nbsp;`.repeat(100);
    
    marquee.addEventListener('mouseenter', () => (marquee.step = 0), false);
    marquee.addEventListener('mouseleave', () => (marquee.step = 3), false);
});

move(); // Вызов функции move() без requestAnimationFrame, чтобы начать анимацию сразу

function move() {
    marquees.forEach((marquee) => {
        marquee.style.marginLeft = -marquee.i + 'px';
        marquee.i = (marquee.i + marquee.step) % (marquee.clientWidth + 1); // Использование оператора % для обеспечения бесконечной анимации
    });

    requestAnimationFrame(move);
}


gsap.registerPlugin(ScrollTrigger);

// apply parallax effect to any element with a data-speed attribute
gsap.to(".box", {
  scrollTrigger: {
    trigger: ".free-preview",
    start: 'top top+=50px',
    end: "right left",
    markers: true,
    scrub: 1,
    pin: ".free-preview",
  },
  opacity: 0,
}
);

/*gsap.to("[data-speed]", {
  scrollTrigger: {
    trigger: ".free-preview",
    start: 'top top+=50px',
    end: "right left",
    markers: true,
    scrub: 1
  },
  y: -200
});*/

gsap.to(".ebook-cover", {
  scrollTrigger: {
    trigger: ".ebook",
    start: 'top top+=50px',
    end: "right left",
    markers: true,
    scrub: 1,
    pin: ".ebook",
  },
  transform: "scale(0.7)"
}
);