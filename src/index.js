import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const menuBars = document.querySelector(".barsIcon")
const closeMenu = document.querySelector(".xMarkIcon")
const teste = document.querySelectorAll(".header a")

function toggleMenu() {
  const nav = document.querySelector(".header nav")
  nav.classList.toggle("showNav")
  const whatsappIcon = document.querySelector(".whatsappIcon")
  whatsappIcon.classList.toggle("hideWhatsappIcon")
  const social = document.querySelector(".social")
  social.classList.toggle("hideSocial")
  const barsIcon = document.querySelector(".barsIcon")
  barsIcon.classList.toggle("hideBarsIcon")
  const xMarkIcon = document.querySelector(".xMarkIcon")
  xMarkIcon.classList.toggle("hideXMarkIcon")
}

menuBars.addEventListener("click", toggleMenu)
closeMenu.addEventListener("click", toggleMenu)
for (let i = 0; i < teste.length; i++) {
  teste[i].addEventListener("click", toggleMenu)
}

/* Transição Suave */

const menuItems = document.querySelectorAll(".header nav a")

menuItems.forEach(item => {
  item.addEventListener("click", scrollToIdOnClick)
})

function getScrollTopByHref(element) {
  const id = element.getAttribute("href")
  return document.querySelector(id).offsetTop
}

function scrollToIdOnClick(event) {
  event.preventDefault()
  const to = getScrollTopByHref(event.target) -110
  scrollToPositon(to)
}

function scrollToPositon(to) {
  smoothScrollTo(100, to)
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
 function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();