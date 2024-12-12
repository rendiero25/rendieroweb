//mobile menu - start
const menubutton = document.getElementById('menu-btn');
const mobilemenu = document.getElementById('mobile-menu');

menubutton.addEventListener('click', () => {
  mobilemenu.classList.toggle('hidden');
});
//mobile menu - end