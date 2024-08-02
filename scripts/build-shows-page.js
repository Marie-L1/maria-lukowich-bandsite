// shows array
const showsSection = [
    {
        date: "Mon Sept 09 2024",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 17 2024",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Oct 12 2024",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 16 2024",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 29 2024",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 18 2024",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

// loop through the array and append them to empty ul 
const showsList = document.querySelector(".shows-array");

function displayingShows(){
    // clear ul html before to avoide duplication of shows
    showsList.innerHTML = "";

    for(let i = 0; i < showsSection.length; i++){
        const showsLi = document.createElement("li");
        showsLi.classList.add("shows-list__item");

        // Date

        const dateTitle = document.createElement("p");
        dateTitle.classList.add("shows-list__title");
        dateTitle.innerText = "DATE";
        showsLi.appendChild(dateTitle); // append date title to the li

        const showsDate = document.createElement("h3");
        showsDate.classList.add("shows-list__date");
        showsDate.innerHTML = showsSection[i].date;
        showsLi.appendChild(showsDate); // append date h3 to the li


        // Venue
        const venueTitle = document.createElement("p");
        venueTitle.classList.add("shows-list__title");
        venueTitle.innerText = "VENUE";
        showsLi.appendChild(venueTitle); // append venue title to the li

        const showsVenue = document.createElement("h3");
        showsVenue.classList.add("shows-list__venue");
        showsVenue.innerHTML = showsSection[i].venue;
        showsLi.appendChild(showsVenue); // append venue h3 to the li


        // Location
        const locationTitle = document.createElement("p");
        locationTitle.classList.add("shows-list__title");
        locationTitle.innerText = "LOCATION";
        showsLi.appendChild(locationTitle); // append location title to the li

        const showsLocation = document.createElement("h3");
        showsLocation.classList.add("shows-list__location");
        showsLocation.innerHTML = showsSection[i].location;
        showsLi.appendChild(showsLocation); // append location h3 to the li


        // Button
        const showsBtn = document.createElement("button");
        showsBtn.classList.add("shows-list__btn");
        showsBtn.innerText = "BUY TICKETS";
        showsLi.appendChild(showsBtn); // appends button to the li


        showsList.appendChild(showsLi); // appends to the ul
    }

};
displayingShows();