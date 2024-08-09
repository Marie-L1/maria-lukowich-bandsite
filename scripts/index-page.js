/* sprint-3 */
import BandSiteApi from "./band-site-api.js";

// gather DOM elements
const commentList = document.querySelector(".comment-list");
const commentForm = document.querySelector(".comments__form");

// creating a variable for the key 
const api_key = "dffc64ab-d0d2-402e-973e-a6233f0562fd";

// object instance of BandSiteApi
const bandsiteApi = new BandSiteApi(api_key);

let commentsApi = await bandsiteApi.getComments();
console.log(commentsApi);


// calls bandsiteApi.getComments(); loops through data and appends dom to elements in the UL list
async function getCommentDataAndAppendToList(){
    // array of comments
    const commentData = await bandsiteApi.getComments();
    console.log(commentData);

    // clear ul html before to avoid duplicates
    commentList.innerHTML = ""; 

    // loop through comment array
    commentData.forEach((comment) => {
        console.log(comment);   // comment object

        const commentLi = document.createElement("li");
        commentLi.classList.add("comment-list__item");

        const commentImg = document.createElement("img");
        commentImg.classList.add("comment-list__img");
        commentImg.src = "https://preview.colorkit.co/color/afafaf.png?size=wallpaper&static=true";
        commentImg.alt= "Profile picture"
        commentLi.appendChild(commentImg);  // append the grey profile img to the li

        const commentName = document.createElement("h3");
        commentName.classList.add("comment-list__name");
        commentName.innerText = comment.name;
        commentLi.appendChild(commentName); // append the h3 to the li

        // format the timestamp to "MM/DD/YYYY"
        const formattedDateCommentAdded = new Date(comment.timestamp).toLocaleDateString();

        const commentTimestamp = document.createElement("p");
        commentTimestamp.classList.add("comment-list__timestamp");
        commentTimestamp.innerText = formattedDateCommentAdded;
        commentLi.appendChild(commentTimestamp); // append the timestamp to the li

        const commentContent = document.createElement("p");
        commentContent.classList.add("comment-list__content");
        commentContent.innerText = comment.comment;
        commentLi.appendChild(commentContent); // append the p to the li


        commentList.appendChild(commentLi); // appending to the ul

    })
}

// listen for Form Submit events
commentForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevents reloading the page
    console.log("comment submitted")
    console.log(event.target)

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

    const newComment = {
        name: event.target.name.value,
        comment: event.target.comment.value
    }
    console.log(newComment)
    
    const response = await bandsiteApi.postComments(newComment);
    console.log(response);
    getCommentDataAndAppendToList();  // call function to reload comments with the latest data

    event.target.reset(); // clear input values
});

getCommentDataAndAppendToList();    // runs when the js first loads


    // Submit button
    // commentForm.addEventListener("submit", function(event){
    //     event.preventDefault(); // prevents reloading the page
    //     console.log("comment submitted")

        // const nameInput = commentForm.querySelector(".comments__name-input");
        // const commentInput = commentForm.querySelector(".comments__comment-input");

        // // clear old error styles
        // nameInput.classList.remove("error");
        // commentInput.classList.remove("error");

        // // getting the input values
        // const nameValidate = nameInput.value.trim();
        // const commentValidate = commentInput.value.trim();

        // // validate the inputs 
        // let hasError = false;

        // if (!nameValidate){
        //     nameInput.classList.add("error");
        //     hasError = true;
        // }
        // if (!commentValidate){
        //     commentInput.classList.add("error");
        //     hasError = true;
        // }

        // if (hasError){
        //     return; // exit the function
        // }
        

    //     const commentName = event.target.name.value;
    //     const commentContent = event.target.comment.value;
    //     console.log(commentName);
    //     console.log(commentContent);

    //     adding the time stamp
        // const timeCommentAdded = Date.now();
        // console.log(timeCommentAdded);
        // const formattedDateCommentAdded = new Date(timeCommentAdded).toLocaleDateString();
    
    //     console.log(formattedDateCommentAdded);
    
    // //     // adding a newComment to the array
    //     const newComment = {
    //         name: commentName,
    //         content: commentContent,
    //         timestamp: formattedDateCommentAdded
    //     }

    //     commentSection.unshift(newComment); // adding the comment to the top of the array

    //     connectingComments();

    //     event.target.reset(); // clear input values
    // })


// connectingComments();
