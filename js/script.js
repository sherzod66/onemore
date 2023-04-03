const burger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');
const die = document.querySelector('.die');
const li = document.querySelectorAll('.header__list > li');
const arrow = document.querySelector('.arrow__active');
const button = document.getElementById('phone');
const menu = document.getElementById('linck');
const main = document.querySelectorAll('.requisites__item');
const wrapper = document.querySelector('.wrapper');




document.addEventListener('click', event => {
    if (event.target.closest('.die')) {
        burger.classList.remove('active');
        headerList.classList.remove('active');
        die.classList.remove('active');
        wrapper.classList.remove('_active')
        document.querySelector('.header__list-sub').classList.remove('active')
        for (let index = 0; index < li.length; index++) {
            li[index].classList.remove('_show');
        }
        for (let index = 0; index < main.length; index++) {
            element = main[index];
            element.classList.remove('active')
        }
        document.body.querySelector('.requisites__content').classList.remove('active')
        document.body.classList.remove('lock')
    }
    if (event.target.closest('.bg')) {
        menu.classList.toggle('show-menu')
        document.querySelector('.header__list-sub').classList.toggle('active')
    }

    if (event.target.closest('.requisites__main')) {
        event.preventDefault()
        wrapper.classList.toggle('_active');
        for (let index = 0; index < main.length; index++) {
            element = main[index];
            element.classList.toggle('active')
        }
        die.classList.toggle('active');
        document.body.querySelector('.requisites__content').classList.toggle('active')
    }
})

burger.onclick = function () {
    burger.classList.toggle('active');
    headerList.classList.toggle('active');
    die.classList.toggle('active');
    document.body.classList.toggle('lock')
    for (let index = 0; index < li.length; index++) {
        li[index].classList.toggle('_show');
    }
}
if (window.innerWidth < 768) {
    button.innerHTML = '<i class="fa-solid fa-phone"></i>'
    //button.style.cssText = `font-size = 1000px`
}

const imgItem = document.body.querySelectorAll('.nav__column-img');
for (let i = 0; i < imgItem.length; i++) {
    const width = getComputedStyle(imgItem[i]);
    imgItem[i].style.cssText = `height: ${width.width}`;
}





