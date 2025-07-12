/* -------------------------------------------------
   1.  DYNAMIC YEAR IN FOOTER
------------------------------------------------- */
document.getElementById('year').textContent = new Date().getFullYear();


/* -------------------------------------------------
   2.  FILTER ADOPTABLE PET CARDS
------------------------------------------------- */
const filterBtns = document.querySelectorAll('.filter-btn'),
      petCards  = document.querySelectorAll('.pet__card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    /* active button styling */
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    /* show / hide cards */
    const category = btn.dataset.filter;           // "all", "dog", "cat", "other"
    petCards.forEach(card => {
      card.style.display =
        category === 'all' || card.classList.contains(category)
          ? 'block'
          : 'none';
    });
  });
});


/* -------------------------------------------------
   3.  CLOSE MOBILE MENU AFTER LINK CLICK
------------------------------------------------- */
const navCheckbox = document.getElementById('nav-toggle');
document.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', () => (navCheckbox.checked = false))
);


/* -------------------------------------------------
   4.  CHANGE HEADER BACKGROUND ON SCROLL
------------------------------------------------- */
const header = document.getElementById('header');
const scrollHeader = () => {
  header.classList.toggle('scroll-header', window.scrollY >= 50);
};
window.addEventListener('scroll', scrollHeader);


/* -------------------------------------------------
   5.  HIGHLIGHT ACTIVE NAV LINK WHILE SCROLLING
------------------------------------------------- */
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(sec => {
    const sectionHeight = sec.offsetHeight,
          sectionTop    = sec.offsetTop - 58,      // header height offset
          sectionId     = sec.getAttribute('id');

    const link = document.querySelector(`.nav__menu a[href*='${sectionId}']`);
    if (!link) return;                             // guard (hero has no link)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
      link.classList.add('active');
    else
      link.classList.remove('active');
  });
}
window.addEventListener('scroll', scrollActive);


/* -------------------------------------------------
   6.  GSAP ENTRANCE ANIMATIONS
------------------------------------------------- */
gsap.from('.home__title',    {opacity: 0, y: -40, duration: 1});
gsap.from('.home__subtitle', {opacity: 0, y:  40, duration: 1, delay: 0.3});
gsap.from('.btn',            {opacity: 0, y:  20, duration: 1, delay: 0.6});



