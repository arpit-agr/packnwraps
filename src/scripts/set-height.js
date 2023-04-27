const parentElement = document.querySelector(".product-materials-list");
const childrenElements = parentElement.children;
for (let child of childrenElements) {
	const childHeight = child.clientHeight;
	const targetElement = child.querySelector("img");
	if (targetElement) {
		targetElement.style.setProperty("--max-height", childHeight);
	}
}
