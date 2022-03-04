/**
 * Function that shows a popup when the user presses a card on the schedule
 * @param {Array.<String>} presenterImages, the location to the image of the presenters stored in an array
 * @param {Array.<String>} presenterNames, the names of the presenters stored in an array
 * @param {Array.<String>} personDescription, the description of the presenters
 * @param {String} eventDescription, the description of the talk
 * @param {String} eventName, the name of the talk
 */
function showPopup(presenterImages, presenterNames, personDescription, eventDescription, eventName){
    // Transform the given location into an HTML element
    presenterImages = presenterImages.map((image) => {
        return `<div class='image' style="background: url('${image}')"/>`;
    })
    presenterImages = presenterImages.join("");

    // Join to make the names a human string
    presenterNames = presenterNames.join(", ");

    // Transform the given descriptions into an HTML element
    personDescription = personDescription.map((description) => {
        return `<span class="description white">${description}</span>`;
    })
    personDescription = personDescription.join("");


    $("body").append(`  <div class='shadow'>
                            <div class='popup container row no-gutters'>
                                <div class='closer' onclick='closePopup()'></div>
                                        <div class="person col-md-4 col-12 white">
                                            <span>
                                                ${presenterNames}
                                            </span>
                                            ${presenterImages}
                                        </div>
                                        <div class="bio col-md-8 col-12">
                                            <span class="title white">
                                                ${eventName}
                                            </span>
                                            <span class="description white">
                                                ${eventDescription}
                                            </span>
                                            ${personDescription}
                                        </div>
                                </div>
                            </div>
                        </div>`)
}

/**
 * Function that closes the popup
 */
function closePopup(){
    $(".shadow").remove();
}
