// menuBtn
let menuBtn = document.querySelector("[data-menu]");
menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle("active");
});
// slidShow
let arrowBtn = document.querySelectorAll("[data-arr]");
let landing = document.querySelector("[data-landing]");
let landingImg = document.querySelectorAll("[data-img]");
let bullets = document.querySelectorAll("[data-bullets]");
let imgNum = 0;

arrowBtn.forEach((el) =>
	el.addEventListener("click", (el) => {
		console.log(imgNum);
		el.target.getAttribute("data-arr") === "after" ? (imgNum += 1) : (imgNum += -1);
		if (imgNum < 0) {
			imgNum = landingImg.length - 1;
		} else if (imgNum > landingImg.length - 1) {
			imgNum = 0;
		}
		landingImg.forEach((el) => el.classList.remove("active"));
		landingImg[imgNum].classList.add("active");
		bullets.forEach((el) => el.classList.remove("active"));
		bullets[imgNum].classList.add("active");
	})
);

// nav

let nav = document.querySelector("[data-nav]");
let links = document.querySelectorAll("[data-links");
let linksSection = document.querySelectorAll("[data-section]");
let observerBack = new IntersectionObserver(
	(el) => {
		if (el.isIntersection === true) return;
		else nav.classList.toggle("in");
	},
	{
		threshold: 0.5,
	}
);

observerBack.observe(landing);
