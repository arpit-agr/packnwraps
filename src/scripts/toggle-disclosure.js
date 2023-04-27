function toggleDisclosure() {
	if (this.getAttribute("aria-expanded") == "false") {
		this.innerText = " Read Less";
		this.setAttribute("aria-expanded", "true");
		this.previousElementSibling.setAttribute("data-state", "visible");
	} else {
		this.innerText = " Read More";
		this.setAttribute("aria-expanded", "false");
		this.previousElementSibling.setAttribute("data-state", "hidden");
	}
}
const disclosureWidget = document.querySelectorAll(".disclosure-widget");
const readMoreButton = document.querySelectorAll(".read-more");

disclosureWidget.forEach((el) => el.setAttribute("data-state", "hidden"));
readMoreButton.forEach((el) => el.addEventListener("click", toggleDisclosure));
