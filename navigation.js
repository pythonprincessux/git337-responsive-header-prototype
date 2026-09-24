const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

document.documentElement.classList.add("js");
button.hidden = false;
list.dataset.open = "false";
function setMenu(open) {
    button.setAttribute("aria-expanded", String(open));
    list.dataset.open = String(open);
}
button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        button.focus();
    }
});