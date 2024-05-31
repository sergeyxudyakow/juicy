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
}


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