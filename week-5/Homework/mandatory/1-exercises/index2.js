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

    let ul = document.createElement("ul");
    content.appendChild(ul);
    
    books.forEach(book => {
        let liTag =document.createElement("li");
        //li.innerText = book;
        ul.appendChild(liTag);

        let titleName = book.title + " - " + book.author;
  
      let title = document.createElement("p");
        title.innerText = titleName;
        liTag.appendChild(title); 
  
    let img = document.createElement("img");

    img.src = book.coverImageUrl;
       liTag.appendChild(img);

       if(book.alreadyRead === true){
           liTag.style.backgroundColor = "green";
       }
       if(book.alreadyRead === false){
        liTag.style.backgroundColor = "red";
       }
      
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
  