'use strict';

// Function Declaration

// function sayHello() {
// 	alert("Hello!");
// }
// sayHello();

// Local variables

function showMessage() {
	let message = "Hello, I'm JavaScript";
	alert(message);
}
showMessage();

// Outer Variables

let userName = "John"

function showUser() {
	userName = "Bob";
	let message = "Hello, " + userName;
	alert(message);
}

showUser();
alert(userName);

