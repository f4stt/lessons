'use strict'

document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}

}

// let someNum = 6
// let someVar = someNum % 2
// if (someVar === 1) {
// 	console.log(`${someNum} непарне`)
// } else {
// 	console.log(`${someNum} парне`);

// }

const header = document.querySelector('.header');

// Слухаємо подію scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		header.classList.add('header--scroll-state');
	} else {
		header.classList.remove('header--scroll-state');
	}
});




