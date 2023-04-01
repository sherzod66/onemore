
const burger = document.querySelector('.header__burger');
const section = document.querySelector('section');
const headerList = document.querySelector('.header__list');
const die = document.querySelector('.die');
const li = document.querySelectorAll('.header__list > li');
const arrow = document.querySelector('.arrow__active');


document.addEventListener('click', event => {
	if (event.target.closest('.header__burger')) {
		burger.classList.toggle('active');
		headerList.classList.toggle('active');
		die.classList.toggle('active');
		section.classList.toggle('active');
		document.body.classList.toggle('lock')
		for (let index = 0; index < li.length; index++) {
			li[index].classList.toggle('_show');
		}
	}
	if (event.target.closest('.die')) {
		burger.classList.remove('active');
		headerList.classList.remove('active');
		die.classList.remove('active');
		section.classList.remove('active');
		for (let index = 0; index < li.length; index++) {
			li[index].classList.remove('_show');
		}
		document.body.classList.remove('lock')
	}
})

const windowWidth = window.innerWidth / 2;
const windowWidthM = window.innerWidth / 1.3;
if (window.innerWidth < 469) {
	headerList.style.cssText = `width: ${windowWidthM}px`;
} else if (window.innerWidth < 769) {
	headerList.style.cssText = `width: ${windowWidth}px`;
} else {
	headerList.style.cssText = `100%`;
}
window.addEventListener('resize', event => {
	const windowWidth = window.innerWidth / 2;
	const windowWidthM = window.innerWidth / 1.3;
	if (window.innerWidth < 469) {
		headerList.style.cssText = `width: ${windowWidthM}px`;
	} else if (window.innerWidth < 769) {
		headerList.style.cssText = `width: ${windowWidth}px`;
	} else {
		headerList.style.cssText = `100%`;
	}
})

if (window.scrollY > 800) {
	arrow.classList.add('_click');
}

const animItems = document.querySelectorAll('._js-ani');

if (animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll() {
		if (window.scrollY > 800) {
			arrow.classList.add('_click');
		} else {
			arrow.classList.remove('_click');
		}
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-none--hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	this.setTimeout(() => {
		animOnScroll();
	}, 300);

}

arrow.addEventListener('click', scrollIntoView);

function scrollIntoView(event) {
	const header = document.querySelector('header');
	header.scrollIntoView({
		block: 'start',
		inline: 'nearest',
		behavior: 'smooth'
	})
}

if (window.innerWidth < 769) {
	const butt = document.querySelector('#butt');
	const conList = document.querySelector('.background');
	conList.remove();
	const newChangePosition = conList.cloneNode(true);
	butt.before(newChangePosition);
}




