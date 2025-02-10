//mobile menu - start
const menubutton = document.getElementById('menu-btn');
const mobilemenu = document.getElementById('mobile-menu');

menubutton.addEventListener('click', () => {
  mobilemenu.classList.toggle('hidden');
});
//mobile menu - end

const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});