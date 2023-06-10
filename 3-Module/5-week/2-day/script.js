// script.js
import { fetchData } from './api.js';

const container = document.getElementById('container');
const addButton = document.getElementById('addButton');

console.log("fetch Data: ", fetchData);

console.log("container: ", container);

const paragraphs = document.querySelectorAll('p');
console.log("paragraphs: ", paragraphs);

addButton.addEventListener('click', (e) => {
    console.log("event: ", e.target)
    e.stopPropagation()
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph.';
    container.appendChild(newParagraph);

    newParagraph.setAttribute('class', 'highlight');

    newParagraph.style.color = 'red';
})


// Step 8: Demonstrate default HTML element behaviors
const link = document.createElement('a');
link.textContent = 'Click me! Im an Anchor';
link.setAttribute('href', 'https://www.google.com');
container.appendChild(link);


// let basicForm = document.querySelectorAll(".basicForm")

// console.log("basic form: ", basicForm)

// basicForm.addEventListener("submit", (e) => {
//     e.preventDefault()
// })


















