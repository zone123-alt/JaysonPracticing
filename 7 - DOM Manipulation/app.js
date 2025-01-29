// Accessing Element using .getElementById()
let elementWithID = document.getElementById("first-div");
console.log(elementWithID);
elementWithID.textContent = "Div 1";

// Accessing Element using .getElementsByClassName()

// Return: HTML Collection

let elementsWithClass = document.getElementsByClassName("sample-div");

console.log(elementsWithClass);

elementsWithClass[1].textContent = "Div 2";
// Accessing Elements using getElementsByTagName()

let listItems = document.getElementsByTagName("li");

console.log(listItems);

listItems[0].style.backgroundColor = "crimson";
// querySelector

// Pass: .class-name, #element-id, tag

// Return: First element or Null

let orderedListItem = document.querySelector(".ordered-list");

console.log(orderedListItem);

orderedListItem.style.color = "lightgreen";
// querySelectorAll

let headings = document.querySelectorAll("h3");

console.log(headings);
// Also works with

// 1. get .getElementsByClassName()

// 2. get .getElementsByTagName()

headings.forEach(function (heading) {
  heading.style.backgroundColor = "tomato";

  heading.style.color = "white";
});
// Updating Element Attributes

let dayNightIcon = document.querySelector("#day-night-icon");

dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending New Elements

let parentElement = document.getElementById("parent-element");

let createdElement = document.createElement("div");

createdElement.textContent = "Child Element";

parentElement.appendChild(createdElement);
// Removing an Element

let elementToBeRemoved = document.querySelector("#element-to-be-removed");

elementToBeRemoved.remove();
// Adding Event Listener and Manipulating Element Styles

let darkModeButton = document.querySelector("#dark-mode-btn");

darkModeButton.addEventListener("click", function () {

  let pageContainer = document.querySelector("#page-container");

  pageContainer.style.backgroundColor = "black";

  pageContainer.style.color = "white";

  let pageModeText = document.querySelector("#page-mode-text")

  pageModeText.textContent = "Dark Mode";

})