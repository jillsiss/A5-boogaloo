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
    // fetch().then(function (response) {
    //     /* This block of code shows how to format the HTML once you fetch some planetary JSON!
    //     <h2>Mission Destination</h2>
    //     <ol>
    //         <li>Name: ${}</li>
    //         <li>Diameter: ${}</li>
    //         <li>Star: ${}</li>
    //         <li>Distance from Earth: ${}</li>
    //         <li>Number of Moons: ${}</li>
    //     </ol>
    //     <img src="${}">
    //     */
    // });


    // 'Adding Validation' and 'Updating Shuttle Requirements' go below
        let form = document.querySelector("form");
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoInput = document.querySelector("input[name=cargoMass]");
        let faultyItemsVis = document.querySelector("div[id=faultyItems")
        form.addEventListener("submit", function(event) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} Ready`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotInput.value} Ready`;

            if (pilotInput.value === "" | copilotInput.value === "" | fuelInput.value === "" | cargoInput.value === "") {
                alert("All fields are required.");
                event.preventDefault();
            } else if(fuelInput.value < 10000) {
                document.getElementById("faultyItems").style.visibility = "visible";
                document.getElementById("fuelStatus").innerHTML = "Not enough fuel to launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
                document.getElementById("launchStatus").style.color = "red";
                event.preventDefault();
            } else if(cargoInput.value > 10000) {
                document.getElementById("faultyItems").style.visibility = "visible";
                document.getElementById("cargoStatus").innerHTML = "Too much mass to launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
                document.getElementById("launchStatus").style.color = "red";
                event.preventDefault();
            } else {
                document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
                document.getElementById("launchStatus").style.color = "green";
                event.preventDefault();
            }

       }); 
    // use this link if you need help with validation: https://education.launchcode.org/intro-to-professional-web-dev/chapters/forms/validation-with-javascript.html#javascript-validation


   
});