import "style-lib";
console.log("Hello World!");
const body = document.querySelector("body");
const computedStyles = getComputedStyle(body);
console.log(computedStyles.backgroundColor);

const p = document.createElement("p");
p.textContent = "background-color: " + computedStyles.backgroundColor;

document.body.appendChild(p);
