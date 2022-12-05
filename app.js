/*
QUESTIONS:
1. when should i use event delegation?)
2. diff btw event delegation and eventListener
3. how to get removeBtn to populate with each meme
4. create img source (why need this?)
*/


/*
 Create the elements of the DOM:
 1. formElement creates the form element
 2. textTop gathers text input from the form element
 3. urlInput gathers url input from the form element
 4. textBottom gathers text input from the form element
 5. placeMeme places the meme below the form
 6. removeMeme removes the meme and text (but need to create element fitst)
 */

const formElement = document.querySelector("#form");
const textTop = document.querySelector('input[name="tTop"]');
const urlInput = document.querySelector('input[name="url-link"]');
const textBottom = document.querySelector('input[name="tBottom"]');
const placeMeme = document.querySelector("#memePlacement");
const removeMeme = document.createElement("button");

/* 
each action should have its own function:
1. function to gather top text for meme
2. function to gather img text for meme
3. function to gather bottom text for meme

*/

//gather top text for meme
function gatherTopText(textOne) {
    //create an element to store gathered text from input for top
    const textTopOne = document.createElement('h2');

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
    
    document.body.appendChild(img);
}

// gather bottom text for meme
function gatherBottomText(textTwo) {
    //create an element to store gathered text from input for bottom
    const textBottomOne = document.createElement('h2');

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

//remove button

// click event for sumbit button
formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("submit triggered");

    /* 
    1. firstText saves the input for the 1st textbox from into a variable
    2. placeMeme appends it to dedicated place in DOM
    3. we clear first text form
    */
    const firstText = gatherTopText(textTop.value);
    placeMeme.appendChild(firstText);
    textTop.value = "";

    /* 
    1. populateImg saves the url input for img into a variable
    2. placeMeme appends it to dedicated place in DOM
    3. we clear first text form
    */
    const populateImg = gatherImg(urlInput.value);
    urlInput.value = "";

    /* 
    1. secondText saves the input for the 1st textbox from into a variable
    2. placeMeme appends it to dedicated place in DOM
    3. we clear third text form
    */
    const secondText = gatherBottomText(textBottom.value);
    placeMeme.appendChild(secondText);
    textBottom.value = "";
})
