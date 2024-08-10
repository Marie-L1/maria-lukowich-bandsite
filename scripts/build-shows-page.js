import BandSiteApi from "./band-site-api.js";

// loop through the array and append them to empty ul 
const showsList = document.querySelector(".shows-array");

// creating a variable for the key 
const api_key = "24a4e214-609b-4706-b1a3-8cde85ba0f5f";
const bandsiteApi = new BandSiteApi(api_key);

const showsData = await bandsiteApi.getShows();
console.log(showsData);

async function displayingShows(){
    // fetching data from the API
    const showsData = await bandsiteApi.getShows()
        console.log(showsData);

        // clear ul html before to avoide duplication of shows
        showsList.innerHTML = "";

        // create and append the titles
        const header = document.createElement("div");
        header.classList.add("shows-list__header");
    
        const dateTitle = document.createElement("h2");
        dateTitle.innerText = "DATE";
        header.appendChild(dateTitle);
    
        const venueTitle = document.createElement("h2");
        venueTitle.innerText = "VENUE";
        header.appendChild(venueTitle);
    
        const locationTitle = document.createElement("h2");
        locationTitle.innerText = "LOCATION";
        header.appendChild(locationTitle);
    
        showsList.appendChild(header);

        // loop through the shows array returned from the API
        showsData.forEach((show) => {
            const showsLi = document.createElement("li");
            showsLi.classList.add("shows-list__item");
    
            // Date
            const dateTitle = document.createElement("h2");
            dateTitle.classList.add("shows-list__title-date");
            dateTitle.innerText = "DATE";
            showsLi.appendChild(dateTitle); // append date title to the li
    
            const showsDate = document.createElement("h3");
            showsDate.classList.add("shows-list__date");
            showsDate.innerHTML = show.date;
            showsLi.appendChild(showsDate); // append date h3 to the li

            // convert date to formatted object
            const formattedDate = new Date(show.date).toDateString();
            showsDate.innerText = formattedDate;
    
    
            // Venue
            const venueTitle = document.createElement("h2");
            venueTitle.classList.add("shows-list__title-venue");
            venueTitle.innerText = "VENUE";
            showsLi.appendChild(venueTitle); // append venue title to the li
    
            const showsVenue = document.createElement("h3");
            showsVenue.classList.add("shows-list__venue");
            showsVenue.innerHTML = show.place;
            showsLi.appendChild(showsVenue); // append venue h3 to the li
    
    
            // Location
            const locationTitle = document.createElement("h2");
            locationTitle.classList.add("shows-list__title-shows");
            locationTitle.innerText = "LOCATION";
            showsLi.appendChild(locationTitle); // append location title to the li
    
            const showsLocation = document.createElement("h3");
            showsLocation.classList.add("shows-list__location");
            showsLocation.innerHTML = show.location;
            showsLi.appendChild(showsLocation); // append location h3 to the li
    
    
            // Button
            const showsBtn = document.createElement("button");
            showsBtn.classList.add("shows-list__btn");
            showsBtn.innerText = "BUY TICKETS";
            showsLi.appendChild(showsBtn); // appends button to the li
    
    
            showsList.appendChild(showsLi); // appends to the ul
        });
    }

    displayingShows();
    
// function displayingShows(){
//     // clear ul html before to avoide duplication of shows
//     showsList.innerHTML = "";

//      // Create and append the header titles
//      const header = document.createElement("div");
//      header.classList.add("shows-list__header");
 
//      const dateTitle = document.createElement("h2");
//      dateTitle.innerText = "DATE";
//      header.appendChild(dateTitle);
 
//      const venueTitle = document.createElement("h2");
//      venueTitle.innerText = "VENUE";
//      header.appendChild(venueTitle);
 
//      const locationTitle = document.createElement("h2");
//      locationTitle.innerText = "LOCATION";
//      header.appendChild(locationTitle);
 
//      showsList.appendChild(header);

//     for(let i = 0; i < showsSection.length; i++){
//         const showsLi = document.createElement("li");
//         showsLi.classList.add("shows-list__item");

//         // Date
//         const dateTitle = document.createElement("h2");
//         dateTitle.classList.add("shows-list__title-date");
//         dateTitle.innerText = "DATE";
//         showsLi.appendChild(dateTitle); // append date title to the li

//         const showsDate = document.createElement("h3");
//         showsDate.classList.add("shows-list__date");
//         showsDate.innerHTML = showsSection[i].date;
//         showsLi.appendChild(showsDate); // append date h3 to the li


//         // Venue
//         const venueTitle = document.createElement("h2");
//         venueTitle.classList.add("shows-list__title-venue");
//         venueTitle.innerText = "VENUE";
//         showsLi.appendChild(venueTitle); // append venue title to the li

//         const showsVenue = document.createElement("h3");
//         showsVenue.classList.add("shows-list__venue");
//         showsVenue.innerHTML = showsSection[i].venue;
//         showsLi.appendChild(showsVenue); // append venue h3 to the li


//         // Location
//         const locationTitle = document.createElement("h2");
//         locationTitle.classList.add("shows-list__title-shows");
//         locationTitle.innerText = "LOCATION";
//         showsLi.appendChild(locationTitle); // append location title to the li

//         const showsLocation = document.createElement("h3");
//         showsLocation.classList.add("shows-list__location");
//         showsLocation.innerHTML = showsSection[i].location;
//         showsLi.appendChild(showsLocation); // append location h3 to the li


//         // Button
//         const showsBtn = document.createElement("button");
//         showsBtn.classList.add("shows-list__btn");
//         showsBtn.innerText = "BUY TICKETS";
//         showsLi.appendChild(showsBtn); // appends button to the li


//         showsList.appendChild(showsLi); // appends to the ul
//     }

// };
