function setHiddenAttribute(element) {
	element.setAttribute("data-hidden", true);
}

function toggleDisclosure(element) {
	element.closest(".disclosure-widget").toggleAttribute("data-hidden");

	const isExpanded = element.getAttribute("aria-expanded") === "false";
	element.setAttribute("aria-expanded", isExpanded);

	if (isExpanded) {
		element.textContent = "View Less";
	} else {
		element.textContent = "View More";
	}
}

const disclosureWidgets = document.querySelectorAll(".disclosure-widget");
const disclosureButtons = document.querySelectorAll(".view-more");

doSomething(disclosureWidgets, setHiddenAttribute);
doSomethingOnClick(disclosureButtons, toggleDisclosure);
