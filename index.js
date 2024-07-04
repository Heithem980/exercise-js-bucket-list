const paragraph = document.createElement("p");
paragraph.innerText = "Burn a million dollars";

const section = document.querySelector(".list");
section.appendChild(paragraph);

const paragraph2 = document.createElement("p");
paragraph2.innerText = "something";

section.insertAdjacentElement("beforeend", paragraph2);

const listElement = document.querySelector(".list");
console.log(listElement.innerHTML);

const newItemHTML = "<p>travel</p>";
listElement.innerHTML += newItemHTML;

const newItemBeginningHTML = "<p>Learn Spanish </p>";
listElement.insertAdjacentHTML("afterbegin", newItemBeginningHTML);

const itemsToAdd = ["skydive ", "write a book", "learn to surf"];

itemsToAdd.forEach((item) => {
  const newP = document.createElement("p");
  newP.innerText = item;
  listElement.appendChild(newP);
});

console.log(listElement.children.length);

const h2Element = document.querySelector("h2.owner");
h2Element.innerText = "Heithem Ghasali";

const firstP = listElement.querySelector("p");
const newFirstItem = document.createElement("p");
newFirstItem.innerText = "get a job";
listElement.replaceChild(newFirstItem, firstP);

const middleP = listElement.children[0];
const newMiddleItem = document.createElement("p");
newMiddleItem.innerText = "learn to drive";
listElement.replaceChild(newMiddleItem, middleP);

const lastP = listElement.lastChild;
listElement.removeChild(lastP);