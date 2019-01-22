'use strict';

// If else operators

let year = prompt('In which year ecmasript was published?', '');

let cond1 = (year > 2015);
let cond2 = (year < 2015);

if (cond1) {
	alert("That's incorrect. Too late.")
} else if(cond2){
	alert("That's incorrect. Too early.");
} else {
	alert("You're smart");
	alert("Exactly!");
}

// Ternary operators 
let age1 = prompt("What's your age", 18);
let accessAllowed = (age1 > 18) ? true : false;
alert(accessAllowed);


let age = prompt("What's your age?", 18);

let message = (age < 3) ? "Hi, Baby!" :
	(age < 18) ? "Hello!" :
	(age < 100) ? "Greetings!" :
	"What an unusual age!";

alert(message);

// Tasks

if ("0") {
	alert("Hello");
}

let name = prompt("What is the official name of JavaScript?", "");

if (name == "ECMAScript") {
	alert("Right");
} else {
	alert("Didn't know? ECMAScript.");
}

let value = prompt("Enter the number.", 0);

if (value > 0) {
	alert(1);
} else if (value < 0) {
	alert(-1);
} else {
	alert(0);
}

let a = 2;
let b = 1;

let result = (a + b < 4) ? "Below" : "Over";
alert(result);

let login = prompt("Enter your details", '');

let message1 = (login == "Employee") ? "Hello!" :
	(login == "Director") ? "Greetings!" :
	(login == "") ? "No login" :
	"";

alert(message1);





