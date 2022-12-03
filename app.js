/*
 Create the elements of the DOM:
 1. formElement creates the form element
 2. textTop gathers text input from the form element
 2. urlInput gathers url input from the form element
 2. textBottom gathers text input from the form element
 3. placeMeme places the meme below the form
 4. removeMeme removes the meme and text (but need to create element fitst)
 */

const formElement = document.querySelector("#form");
const textTop = document.querySelector('input[name="tTop"]');
const urlInput = document.querySelector('input[name="url-link"]');
const urlInput = document.querySelector('input[name="tBottom"]');
const placeMeme = document.querySelector("#memePlacement");
const removeMeme = document.createElement("button");

/*
each action should have its event delegation (when should i use event delegation?) 
*/

/* 
each action should have its own function:

function to gather top text for meme
function to gather img text for meme
function to gather bottom text for meme

*/

//function to gather top text for meme
function gatherTopText(textOne) {
    //create an element to store gathered text from input for top
    const textTopOne = document.createElement('h6');

    // set inner text of created h6 element from input
    textTopOne.innerText = textOne;

    // return created element
    return textTopOne;
}

//function to gather img text for meme

//function to gather bottom text for meme
function gatherTopText(textTwo) {
    //create an element to store gathered text from input for bottom
    const textBottomOne = document.createElement('h6');

    // set inner text of created h6 element from input
    textBottomOne.innerText = textTwo;

    // return created element
    return textBottomOne;
}

//submit button on click

// add the three together prepend append???

