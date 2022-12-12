/*
 Create the elements of the DOM:
 1. formElement creates the form element
 2. textTop gathers text input from the form element
 3. urlInput gathers url input from the form element
 4. textBottom gathers text input from the form element
 5. placeMeme places the meme below the form
 7. letters for the title for multicolor effect
 */

const formElement = document.querySelector("#form");
const textTop = document.querySelector('input[name="tTop"]');
const urlInput = document.querySelector('input[name="url-link"]');
const textBottom = document.querySelector('input[name="tBottom"]');
const placeMeme = document.querySelector("#memePlacement");
const letters = document.querySelectorAll(".letter");

/* 
each action should have its own function:
1. function to gather top text for meme
2. function to gather img text for meme
3. function to gather bottom text for meme
4. function for rgb effect for title
5. function for remove button

*/

function randomizeRGB() {
    // randomizes the color assignment for the rgb function
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

setInterval(() => {
    for (let letter of letters) {
        letter.style.color = randomizeRGB();
    }

}, 1000);

//gather top text for meme
function gatherTopText(textOne) {
    //create an element to store gathered text from input for top
    const textTopOne = document.createElement('div');

    // set inner text of created h6 element from input
    textTopOne.innerText = textOne;

    // return created element
    return textTopOne;
}

/* 
gather img text for meme 
source:  https://www.youtube.com/watch?v=26pC8UuAsww
*/
function gatherImg(url) {
    // create element to store img
    const img = document.createElement('img');

    // gather link from form
    url = document.getElementById("url-link").value;

    // create img source (why need this?)
    img.src = url;
    
    placeMeme.appendChild(img);
}

// gather bottom text for meme
function gatherBottomText(textTwo) {
    //create an element to store gathered text from input for bottom
    const textBottomOne = document.createElement('div');

    // set inner text of created h6 element from input
    textBottomOne.innerText = textTwo;

    // return created element
    return textBottomOne;
}

/*
each action should have its event delegation:
1. remove button
2. click sumbit add the three together prepend append??? on sumbit?
*/

//remove as event delegation
placeMeme.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
        console.log(e.target);
        e.target.parentElement.remove();
    } 
});

// click event for sumbit button...create remove button here???
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit triggered");

    /*
    1. firstText saves the input for the 1st textbox from into a variable
    2. placeMeme appends it to dedicated place in DOM
    */
    const firstText = gatherTopText(textTop.value);
    placeMeme.appendChild(firstText);


    /* 
    1. gatherImg function is called to populate the img on the DOM
    */
    gatherImg(urlInput.value);

    /* 
    1. secondText saves the input for the 1st textbox from into a variable
    2. placeMeme appends it to dedicated place in DOM
    */
    const secondText = gatherBottomText(textBottom.value);
    placeMeme.appendChild(secondText);

    // place remove button
    const removeMeme = document.createElement("button");
    removeMeme.innerText = "Remove Meme";
    placeMeme.appendChild(removeMeme);

    form.reset();

})
