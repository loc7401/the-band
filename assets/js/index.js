const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');

const modalClose = document.querySelector('.js-close');
const container = document.querySelector('.js-modal-container');

const menuBtn = document.querySelector('#js-menu-btn');
const header = document.querySelector('#header');

const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

var headerHeight = header.clientHeight;

function buyTicket() {
  modal.classList.add('open');
}

function closeBuy() {
  modal.classList.remove('open');
}

function openMenu() {
  if (header.clientHeight === headerHeight) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', buyTicket);
}

for (const menuItem of menuItems) {
  menuItem.onclick = function (event) {
    const isMoreItem = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if (isMoreItem) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
container.addEventListener('click', function (event) {
  event.stopPropagation();
});

modalClose.addEventListener('click', closeBuy);
modal.addEventListener('click', closeBuy);
menuBtn.addEventListener('click', openMenu);
