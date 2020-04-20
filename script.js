const nav = document.querySelector(".navigation__nav");
const list = document.getElementById("navi-toggle");
const body = document.querySelector("body");
const swiperBox = document.getElementsByClassName("swiper-slide");
const hold = document.querySelector(".swiper-hold");
const swipeB = document.getElementsByClassName("swiper-box");
const wrapper = document.querySelector(".swiper-container");
const time = document.getElementsByClassName("time");
const day = document.getElementsByClassName("day");

const handleToggle = () => {
  if (list.checked) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "scroll";
  }
};

function scroll_to(selector) {
  $("html,body").animate({ scrollTop: $(selector).offset().top }, 1000);
  list.checked = false;
  body.style.overflow = "scroll";
}

(function () {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(".book");

  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
      50 - (_mouseY - _h) * 0.06
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;

    elem.style.backgroundPosition = x;
  }
})();

const carousel = document.querySelector(".carousel");
const h = document.querySelector(".section-tours");
let currdeg = 0;
const x = document.getElementsByClassName("item");

function rotate(d) {
  if (d == "next") {
    currdeg = currdeg - 60;
  }
  if (d == "prev") {
    currdeg = currdeg + 60;
  }
  carousel.style.transform = "rotateY(" + currdeg + "deg)";
}
(function () {
  let myInt = setInterval((e) => {
    currdeg = currdeg - 60;
    carousel.style.transform = "rotateY(" + currdeg + "deg)";
  }, 4000);

  carousel.addEventListener("mouseover", (e) => {
    clearInterval(myInt);
  });

  carousel.addEventListener("mouseout", (e) => {
    myInt = setInterval((e) => {
      currdeg = currdeg - 60;
      carousel.style.transform = "rotateY(" + currdeg + "deg)";
    }, 4000);
  });
})();

hold.addEventListener("click", function () {
  hold.classList.toggle("click");
  for (let i = 0; i < 8; i++) {
    if (swiperBox[i].classList.value.includes("active")) {
      swipeB[i].classList.toggle("hov");
    } else {
      swipeB[i].classList.remove("hov");
      swipeB[i].classList.remove("hov");
    }
  }
  const month = date.getMonth();

  const dayNow = date.getDay();
  for (let i = 0; i < 8; i++) {
    time[i].innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    day[i].innerHTML = `${days[dayNow]}, ${months[month]} ${date.getDate()}`;
  }
});

wrapper.addEventListener("mousedown", function () {
  for (let i = 0; i < 8; i++) {
    swipeB[i].classList.remove("hov");
    swipeB[i].classList.remove("hov");
  }
});

const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(window.innerWidth);
