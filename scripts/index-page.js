// comment array
const commentSection = [
    {
        title: "Victor Pinto",
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        timestamp: "11/02/2023"
    },
    {
        title: "Christina Cabrera",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        timestamp: "10/28/2023"
    },
    {
        title: "Isaac Tadesse",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        timestamp: "10/20/2023"
    }
];

// loop through the comments, creates and append to the <ul> DOM
// add a form with an event listener to add new comment to ul in the DOM

const commentList = document.querySelector(".comment-list");
const commentForm = document.querySelector(".comments-form");

function connectingComments() {
    // clear ul html before to avoid duplicates
    commentList.innerText = ""; 

    // loop through the array
    for(let i =0; i < commentSection.length; i++){
        const commentLi = document.createElementNS("li");
        commentLi.addEventListener("comment-list__item");

        const commentTitle = document.createElement("h3");
        commentTitle.classList("comment-list__title");
        commentTitle.innerText = commentSection[i].title;
        commentLi.appendChild(commentTitle); // append the h3 to the li

        const commentContent = document.createElement("p");
        commentContent.classContent("comment-list__content");
        commentContent.innerText = commentSection[i].content;
        commentLi.appendChild(commentContent); // append the p to the li

        commentList.appendChild(commentLi); // appending to the ul
    }
}

    // Submit button
    commentForm.addEventListener("submit", function(event){
        event.preventDefault(); // prevents reloading the page
        console.log("comment submitted")
        const commentTitle = event.target.title.value;
        const commentContent = event.target.content.value;

        console.log(commentTitle);
        console.log(commentContent);

        // adding the time stamp
        const timeCommentAdded = Date.now();
        console.log(timeCommentAdded);
        const formattedDateCommentAdded = new Date(timeCommentAdded).toLocaleDateString();
        console.log(formattedDateCommentAdded);
    
        // adding a newComment to the array
        const newComment = {
            title: commentTitle,
            content: commentContent,
            timestamp: formattedDateCommentAdded
        }

        commentSection.unshift(newComment); // adding the comment to the top of the array

        connectingComments();

        event.target.reset(); // clear input values
    })


connectingComments();