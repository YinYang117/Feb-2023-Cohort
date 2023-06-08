window.addEventListener("DOMContentLoaded", () => {

    // Select the h1 and change it's style



    const title = document.getElementById('title');

    title.style.color = 'red'

    const buttonContainer = document.getElementsByClassName('button-container')[0];


    //select the test button and make it say something in the console when you click it

    const testButton = document.querySelector('#test-button');

    testButton.addEventListener('click', (e) => {

        const changeColorButton = document.createElement('button');
        changeColorButton.innerText = 'change text color'
        changeColorButton.className = 'change-color-button';
        changeColorButton.addEventListener('click', () => {
            // give that button a class of change-color-button
            // when you press it will change the style of the text color
            const text = document.querySelectorAll('.page-text');

            text.forEach(el => {
                el.style.color = 'blue'
            })


        })


        buttonContainer.appendChild(changeColorButton)

    })
















})
