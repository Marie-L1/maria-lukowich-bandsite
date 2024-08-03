// comment array
const commentSection = [
    {
        name: "Victor Pinto",
        content: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        timestamp: "11/02/2023"
    },
    {
        name: "Christina Cabrera",
        content: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        timestamp: "10/28/2023"
    },
    {
        name: "Isaac Tadesse",
        content: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        timestamp: "10/20/2023"
    }
];

// loop through the comments, creates and append to the <ul> DOM
// add a form with an event listener to add new comment to ul in the DOM

const commentList = document.querySelector(".comment-list");
const commentForm = document.querySelector(".comments__form");


function connectingComments() {
    // clear ul html before to avoid duplicates
    commentList.innerHTML = ""; 

    // loop through the array
    for(let i = 0; i < commentSection.length; i++){
        const commentLi = document.createElement("li");
        commentLi.classList.add("comment-list__item");

        const commentImg = document.createElement("img");
        commentImg.classList.add("comment-list__img");
        commentImg.src = "https://preview.colorkit.co/color/afafaf.png?size=wallpaper&static=true";
        commentImg.alt= "Profile picture"
        commentLi.appendChild(commentImg);  // append the grey profile img to the li

        const commentName = document.createElement("h3");
        commentName.classList.add("comment-list__name");
        commentName.innerText = commentSection[i].name;
        commentLi.appendChild(commentName); // append the h3 to the li

        const commentTimestamp = document.createElement("p");
        commentTimestamp.classList.add("comment-list__timestamp");
        commentTimestamp.innerText = commentSection[i].timestamp;
        commentLi.appendChild(commentTimestamp); // append the timestamp to the li

        const commentContent = document.createElement("p");
        commentContent.classList.add("comment-list__content");
        commentContent.innerText = commentSection[i].content;
        commentLi.appendChild(commentContent); // append the p to the li


        commentList.appendChild(commentLi); // appending to the ul
    }
}

    // Submit button
    commentForm.addEventListener("submit", function(event){
        event.preventDefault(); // prevents reloading the page
        console.log("comment submitted")


        const nameInput = commentForm.querySelector(".comments__name-input");
        const commentInput = commentForm.querySelector(".comments__comment-input");

        // clear old error styles
        nameInput.classList.remove("error");
        commentInput.classList.remove("error");

        // getting the input values
        const nameValidate = nameInput.value.trim();
        const commentValidate = commentInput.value.trim();

        // validate the inputs 
        let hasError = false;

        if (!nameValidate){
            nameInput.classList.add("error");
            hasError = true;
        }
        if (!commentValidate){
            commentInput.classList.add("error");
            hasError = true;
        }

        if (hasError){
            return; // exit the function
        }
        

        const commentName = event.target.name.value;
        const commentContent = event.target.comment.value;
        console.log(commentName);
        console.log(commentContent);

        // adding the time stamp
        const timeCommentAdded = Date.now();
        console.log(timeCommentAdded);
        const formattedDateCommentAdded = new Date(timeCommentAdded).toLocaleDateString();
    
        console.log(formattedDateCommentAdded);
    
        // adding a newComment to the array
        const newComment = {
            name: commentName,
            content: commentContent,
            timestamp: formattedDateCommentAdded
        }

        commentSection.unshift(newComment); // adding the comment to the top of the array

        connectingComments();

        event.target.reset(); // clear input values
    })


connectingComments();