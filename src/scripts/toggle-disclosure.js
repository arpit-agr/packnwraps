function toggleDisclosure() {
	if (this.getAttribute("aria-expanded") == "false") {
		this.innerText = " View Less";
		this.setAttribute("aria-expanded", "true");
		this.previousElementSibling.setAttribute("data-state", "visible");
	} else {
		this.innerText = " View More";
		this.setAttribute("aria-expanded", "false");
		this.previousElementSibling.setAttribute("data-state", "hidden");
	}
}
const disclosureWidget = document.querySelectorAll(".disclosure-widget");
const viewMoreButton = document.querySelectorAll(".view-more");

disclosureWidget.forEach((el) => el.setAttribute("data-state", "hidden"));
viewMoreButton.forEach((el) => el.addEventListener("click", toggleDisclosure));
