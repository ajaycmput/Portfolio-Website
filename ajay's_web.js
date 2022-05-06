const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link') /* selecting all nav links */

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})