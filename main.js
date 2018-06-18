console.log("Running script")
//Import Jquery to html


function handleClickEvent() {
    console.log("The button was clicked")
    var userWeight = document.getElementById("user-weight").value; 
    var planetName = document.getElementById("planets").value;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById('output').innerHTML = result;
}

//Js
document.getElementById('calculate-button').onclick = handleClickEvent

// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];

  // Use the following built-in methods:
  // `.forEach` `document.createElement` `document.getElementById` `.appendChild
  var select = document.getElementById("planets"); 
  planets.forEach(function(item) {
      var option = document.createElement('option');
      option.text = item[0];
      option.value = item[0];
      select.tappendChild(option);
  });


  
  function calculateWeight(weight, planetName) {
      for (i = 0; i < planets.length; i++) {
          var planArray = planets[i];
          if (planArray[0] === planetName) {
              var newWeight = weight * planArray[1];
              return 'If you were on ' + planArray[0] + ', you would weigh ' + newWeight +"lbs!"
          }
      }
  }



     
