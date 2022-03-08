let menuBtn = document.querySelector("[data-menu]");
menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle("active");
});
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
