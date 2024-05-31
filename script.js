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
const bars = document.querySelectorAll(".menu .bars span"); // Добавляем селекторы для линий меню

function toggleMenu() {
  menu.classList.toggle("menu-active");

  // Проверяем, активно ли меню, и изменяем стили линий для создания крестика
  if (menu.classList.contains("menu-active")) {
    bars[0].style.transform = "translateY(8px) rotate(135deg)";
    bars[0].style.transition = "all .2s linear";
    bars[1].style.transform = "translateY(8px) rotate(45deg)";
    bars[1].style.transition = "all .2s linear";
  } else {
    bars[0].style.transform = "";
    bars[1].style.transform = "";
  }
}

hamburger.addEventListener("click", toggleMenu);

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





/*const marquees = [...document.querySelectorAll('.marque')];

marquees.forEach((marquee) => {
    marquee.innerHTML = marquee.innerHTML + '&nbsp;'.repeat(5);
    marquee.i = 0;
    marquee.step = 3;
    marquee.width = marquee.clientWidth + 1;
    marquee.innerHTML = `${marquee.innerHTML}&nbsp;`.repeat(10);

    marquee.addEventListener('mouseenter', () => (marquee.step = 0), false);
    marquee.addEventListener('mouseleave', () => (marquee.step = 3), false);
});

requestAnimationFrame(move);

function move() {
    marquees.forEach((marquee) => {
        marquee.style.marginLeft = `-${marquee.i}px`;
        marquee.i = marquee.i < marquee.width ? marquee.i + marquee.step : 0;
        if (marquee.i === 0) {
            marquee.i = 1;
        }
    });

    requestAnimationFrame(move);
}*/

function Marque(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
window.addEventListener('load', Marque('.marque', 0.8))




/*gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  scrollTrigger: {
    trigger: ".free-preview",
    start: 'top top+=0px',
    end: "right left",
    scrub: 1,
    pin: ".free-preview",
  },
  opacity: 0,
}
);*/

/*gsap.to(".ebook-cover", {
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
);*/




/*const throttled = (delay, fn) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};

const movableElementsWrapper = document.querySelector(
  ".book-layout"
);
const speed = 0.35;

const items = gsap.utils.toArray(".ebook-label").map(element => {
  return {
    element,
    shiftValue: element.getAttribute("data-value") / 250,
    xSet: gsap.quickSetter(element, "x", "px"),
    ySet: gsap.quickSetter(element, "y", "px"),
  }
});

const mouse = {
  x: 0,
  y: 0
};

const mouseMoveHandler = (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
};

movableElementsWrapper.onmousemove = mouseMoveHandler;

gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
  
  items.forEach(item => {
    item.xSet(item.shiftValue * mouse.x * dt);
    item.ySet(item.shiftValue * mouse.y * dt);
  });
});*/