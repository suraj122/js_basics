'use strict';
// Or operators
let hour1 = prompt("Enter the time", 0);

if (hour1 < 10 || hour1 > 18) {
	alert("The office is closed");
} else {
	alert("You are welcome!");
}

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert(name);


// And operators

let hour2 = prompt("Enter time in hours", 0);
let minute = prompt("Enter tiem is minute", 0);

if (hour2 == 12 && minute == 30) {
	alert("The time is 12:30");
}

let x = prompt("Enter a number", 0);
(x > 0) && alert("Greater than 0");

// Not operators

alert(!!"null");
alert(Boolean("null"));
alert(Boolean(null));




// Tasks

alert(null || 2 || undefined);

alert(2 && null && 3);
alert(alert(1) && alert(2));

alert(null || 2 && 3 || 4);

let age = prompt("enter your age", 0);

if (age > 14 && age < 90) {
	alert("You are eligible");
} else {
	alert("Go to hell");
}

if (-1 || 0) {
	alert("first");
} 
if (-1 && 0) {
	alert("second");
}

if (null || -1 && 1) {
	alert("third");
}

let user = prompt("Enter your details", '');

if (user == 'Admin') {

	let password = prompt("Enter your Password", '');

	if (password == 'TheMaster'){

		alert("Welcome!");

	} else if (password == '' || password == null) {

		alert("Canceled");

	} else {

		alert("Wrong Password");

	}

} else if (user == '' || user == null) {

	alert("Canceled");

} else {

	alert("I dont know you");

}