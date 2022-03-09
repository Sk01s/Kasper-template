// menuBtn
let menuBtn = document.querySelector("[data-menu]");
menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle("active");
});
// slidShow
let arrowBtn = document.querySelectorAll("[data-arr]");
let landing = document.querySelector("[data-landing]");
let arrNum = 0;
let imgArr = [
	"../image/landing(1).jpg",
	"../image/landing(2).jpg",
	"../image/landing(3).jpg",
];
let bullets = document.querySelectorAll("[data-bullets] > *");
arrowBtn.forEach((el) => {
	el.addEventListener("click", (e) => {
		e.target.dataset.arr === "after" ? arrNum++ : arrNum--;
		if (arrNum < 0) {
			arrNum = imgArr.length - 1;
		}
		if (arrNum > imgArr.length - 1) {
			arrNum = 0;
		}
		landing.style.backgroundImage = ` url('${imgArr[arrNum]}')`;
		// console.log(bullets);
		bullets.forEach((el) => {
			el.classList.remove("active");
		});
		bullets[arrNum].classList.add("active");
	});
});
// nav

let nav = document.querySelector("[data-nav]");
let links = document.querySelectorAll("[data-links");
let linksSection = document.querySelectorAll("[data-section]");
let observerBack = new IntersectionObserver((el) => {
	if (el.isIntersection) return;
	else nav.classList.toggle("in");
}, {});

observerBack.observe(landing);

let navObserverSection = new IntersectionObserver((el) => {
	if (!el.isIntersection) links.forEach((el) => el.classList.remove("active"));
	el.forEach((el) => {
		if (el.isIntersecting) {
			document.getElementById(el.target.dataset.section).classList.add("active");
			console.log(el.target.dataset.section);
		}
	});
}, {});
linksSection.forEach((el) => navObserverSection.observe(el));
