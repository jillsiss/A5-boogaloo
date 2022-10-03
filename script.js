/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {

    // 'Fetching Planetary Data' goes below:
    fetch().then(function (response) {
        /* This block of code shows how to format the HTML once you fetch some planetary JSON!
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${}</li>
            <li>Diameter: ${}</li>
            <li>Star: ${}</li>
            <li>Distance from Earth: ${}</li>
            <li>Number of Moons: ${}</li>
        </ol>
        <img src="${}">
        */
    });


    // 'Adding Validation' and 'Updating Shuttle Requirements' go below
        let form = document.querySelector("form");
        let pilotInput = document.querySelector("input[name=pilotName");
        let copilotInput = document.querySelector("input[name=copilotName");
        let fuelInput = document.querySelector("input[name=fuelLevel");
        let cargoInput = document.querySelector("input[name=cargoMass");
        form.addEventListener("submit", function(event) {
            if (pilotInput.value === "" | copilotInput.value === "" | fuelInput.value === "" | cargoInput.value === "") {
                alert("All fields are required.");
                event.preventDefault();
            }
       }); 
    // use this link if you need help with validation: https://education.launchcode.org/intro-to-professional-web-dev/chapters/forms/validation-with-javascript.html#javascript-validation


   
});