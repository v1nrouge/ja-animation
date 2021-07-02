const tl = gsap.timeline();

tl
  .from(".hero__title", {y: 100, duration: 1, opacity: 0}, 0.5)
  .from(".hero__btn", {y: 100, duration: 1, opacity: 0}, 0.5)
  .from(".hero__descr", {duration: 2, opacity: 0}, 1.2)
  .from("#photo1", {duration: 0.7, opacity: 0, scale: 0.7}, 1.4)
  .from("#photo2", {duration: 0.7, opacity: 0, scale: 0.7}, 1.6)
  .from("#photo3", {duration: 0.7, opacity: 0, scale: 0.7}, 1.8)
  .from(".photos__author", {duration: 2, opacity: 0}, 1.8);

const burgerBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".menu");

const tlMenu = gsap.timeline({paused: true});

tlMenu
  .from(".menu__top", {yPercent: -100, opacity: 0, duration: 0.5})
  .from(".close", {opacity: 0})
  .from(".menu__bottom", {yPercent: 10, opacity: 0, duration: 0.5}, 0.2)
  .from(".nav__list", {y: 50, duration: 0.5, opacity: 0}, 0.5)
  .from(".menu__right", {y: 50, duration: 0.5, opacity: 0}, 0.7)
  .from(".social", {y: 50, duration: 0.5, opacity: 0}, 0.7)
  .eventCallback("onReverseComplete", () => {
    menu.classList.remove("menu--open")
  });

burgerBtn.addEventListener('click', () => {
  menu.classList.add("menu--open");
  tlMenu.play();
})

closeBtn.addEventListener('click', () => {
  tlMenu.reverse();
})
