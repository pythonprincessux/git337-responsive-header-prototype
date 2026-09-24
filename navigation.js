const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

document.documentElement.classList.add("js");
button.hidden = false;
list.dataset.open = "false";
function setMenu(open) {
    button.setAttribute("aria-expanded", String(open));
    list.dataset.open = String(open);
}
// TODO 3: toggle that function when the native button is activated.
// TODO 4: when Escape is pressed while open, close and return focus to the button.
