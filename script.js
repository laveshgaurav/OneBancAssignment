gsap.registerPlugin(ScrollTrigger);
gsap.from("#phone-small", { y: -30, duration: 1.5 });
gsap.from("#phone-large", { y: 30, duration: 1.5 });

gsap.from("#design-end", {
  scrollTrigger: ".section-4",
  y: 300,
  duration: 2,
  start: 400,
});

const el = document.querySelector(".content");
// get scroll position in px
console.log(el.offsetB);
