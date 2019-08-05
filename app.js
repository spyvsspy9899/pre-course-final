function f1() {
  alert("the popup alert")
}
f1()
//recalls input
//when the popup loads, load the window
window.onclick = function() {
  'onclickFunction'
};

let log = document.getElementById('log');
document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}

function forLoop() {
  for (var i = 3; i < 10; i++) {
    alert("I am a looping function, my number is: " + i);
  }
}

forLoop()

//conditional statements
var a = 21
var b = 33
var c = 1

//if statement #1 with function
function GreaterThan() {
  if (a > b) {
    console.log(a > b);
  } else if (c > a) {
    console.log('this is false');
  } else {
    console.log('c is not greater than a');
  }
}

GreaterThan()

var a = 1
var b = 2
var c = 3

function printHellofriends() {}
if (a < c) {
} else if (b > a) {
} else if (c > a) {
  console.log('Hello friends');
}

printHellofriends()

var a = 2
var b = 3
var c = 27


function numberofdogs() {
  var numberofdogs = 10
  for (var i = 0; i < 10; i++) {
    numberofdogs++
  }
  return 10;
}

numberofdogs()

//if statement#2 with function
function greetings() {
  if (b > c) {
    Greeeting = "hola";
  } else if (a < c) {
    Greeting = "f off";
  }
  console.log(Greeting);
}

greetings()

//for statement #1 with function
function printDogs() {
  var dogBreeds = ['Doberman', 'GreatDane', 'Husky']
  for (var z = 0; z < dogBreeds.length; z++) {
    console.log(dogBreeds[z])
  }
}

printDogs()

//for statement #2 with function
function printTupacshooter() {
  var tupacShooters = ['sugknight', 'biggie', 'tupac'];
  for (var j = 1; j < tupacShooters.length; j++) {
    console.log(tupacShooter[j])
   }
 }

Tupacshooter()

//for function #3
function printGucci() {
  var guccimane = ['icy', 'polarbear', 'ak47']
  for (var z = 4; z < guccimane.length; z++); {
    console.log(guccimane[Z])
  }
}

printGucci
