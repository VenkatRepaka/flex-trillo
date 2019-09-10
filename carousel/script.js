let carousel = document.querySelector('.carousel');
let seats = document.querySelectorAll('.carousel-seat');

next = (el) => el.nextElementSibling != null && el.nextElementSibling !== undefined ? el.nextElementSibling : el.parentNode.firstElementChild;

function toggle() {
  let el = document.querySelector('.is-ref');
  el.classList.remove("is-ref");
  console.log(el);
  let new_seat = next(el);
  console.log(new_seat);
  new_seat.classList.add('is-ref');
  new_seat.style.order = 1;
  for(let i=2; i <= seats.length; i++) {
    new_seat = next(new_seat)
    new_seat.style.order = i;
  }
  carousel.classList.remove('is-set');
  setTimeout (() => carousel.classList.add('is-set'), 50);
}