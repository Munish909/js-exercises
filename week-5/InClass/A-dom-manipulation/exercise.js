/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log(document.querySelectorAll("p"));
console.log(document.querySelector(".site-header"));
console.log(document.querySelector("#jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", message);

function message(){
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let colorButton = document.querySelector("#bgrChangeBtn");
colorButton.addEventListener("click", changeColor);

function changeColor(){
    document.body.style.backgroundColor = "aqua";
}
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
// let addTextButton = document.querySelector("#addTextBtn");
// addTextButton.addEventListener("click", newParagraph);

let addText = document.querySelector("#addTextBtn");
addText.addEventListener("click", newParagraph);

function newParagraph(){
    let changePara = document.createElement("p");
    changePara.innerText = "Read more below.";
    let addParagraph = document.querySelector(".buttons");
    addParagraph.appendChild(changePara);
    console.log(addParagraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let lLinksButton = document.querySelector("#largerLinksBtn");
lLinksButton.addEventListener("click", largerLinks);

function largerLinks(){
    let links = document.querySelectorAll("a");
    links.forEach(enlarge);
   
}
   function enlarge(link){
     link.style.fontSize = "25px";
     
   }
/*
Task 6
======

Using JavaScript, create an unordered list under the "Add" button.
When the "Add" button is pressed, get the value of the text box on its left, and add it to the list you created above.
*/
let addItem = document.querySelector("#addArticleBtn");
let newItem  = document.querySelector(".addArticle");
let unorderedList = document.createElement("ul");
let outputDiv = document.querySelector("#newInput");
outputDiv.appendChild(unorderedList);

addItem.addEventListener("click", addNewToList);
     
function addNewToList(event){
     let itemList = document.createElement("li");
     itemList.innerText = newItem.value;
     unorderedList.appendChild(itemList);
     newItem.value = "";
   }

