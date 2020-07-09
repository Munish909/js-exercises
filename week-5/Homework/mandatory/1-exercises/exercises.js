/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => {
    let name = document.createElement("h1");
        name.innerText = person.name;
       content.appendChild(name); 
    let job = document.createElement("h2");
    job.innerText = person.job;
      content.appendChild(job);

  })
}



/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shoppingItems) {
  //Write your code in here
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  
  shoppingItems.forEach(item =>{
  let li =document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
  })
  content.appendChild(ul);
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false,
            coverImageUrl: "assets/design_of_things.jpeg"
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true,
            coverImageUrl: "assets/most_human_human.jpeg"
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true,
            coverImageUrl: "assets/pragmatic_programmer.jpeg"
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
 
function exerciseThree(books) {
  //Write your code in here
  let content = document.querySelector("#content");
  
  books.forEach(book => {

    let title = document.createElement("p");
      title.innerText = book.title;
      content.appendChild(title); 

    let author = document.createElement("p");
    author.innerText = book.author;
    content.appendChild(author);

    let ul = document.createElement("ul");
  
  
    let li =document.createElement("li");
    li.innerText = book;
    ul.appendChild(li);
  })
  
}


function book(shoppingItems) {
  //Write your code in here
  let content = document.querySelector("title");
  
  content.appendChild(ul);
}


//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    coverImageUrl: "assets/design_of_things.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverImageUrl: "assets/most_human_human.jpeg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverImageUrl: "assets/pragmatic_programmer.jpeg",
  },
];

exerciseThree(books);
