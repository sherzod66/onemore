const arrowL = document.querySelector('.arrow__active');

window.addEventListener("scroll", animOnScroll);
function animOnScroll() {
    if (window.scrollY > 500) {
        arrowL.classList.add('_click');
    } else {
        arrowL.classList.remove('_click');
    }
}

arrowL.addEventListener('click', scrollIntoView);

function scrollIntoView(event) {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}