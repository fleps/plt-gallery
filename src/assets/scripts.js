'use strict';

/* Show More Button on mobile viewport */
document.querySelector('.js-show-more').addEventListener('click', e => {
  const grid = document.querySelector('.grid-wrapper');
  const scrollTo = grid.querySelector('.product-wrapper:nth-child(5)');
  const scrollOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  };
  grid.classList.remove('has-hidden-products');
  scrollTo.scrollIntoView(scrollOptions);
  e.currentTarget.classList.add('hidden');
});

/* Making the product gallery draggable on desktop */
const slider = document.querySelector('.js-draggable');
let isMouseDown = false;
let startX;
let scrollLeft;

slider.addEventListener(
  'mousedown',
  e => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return;
    isMouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  },
  false,
);

slider.addEventListener(
  'mousemove',
  e => {
    if (!isMouseDown) return;
    slider.classList.add('active');
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Increase the scroll speed a bit to help with horizontal scrolling for better UX.
    slider.scrollLeft = scrollLeft - walk;
  },
  false,
);

['mouseleave', 'mouseup'].forEach(eventType => {
  slider.addEventListener(
    eventType,
    () => {
      isMouseDown = false;
      slider.classList.remove('active');
    },
    false,
  );
});
