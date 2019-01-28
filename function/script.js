'use strict';

// Function Declaration

function sayHello() {
	alert("Hello!");
}
sayHello();

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

// Parameters

function showMessage(from, text="no text given") {

	from = '*' + from + '*';

	alert(from + ': ' + text);
}

showMessage('Ann', 'Hello');
showMessage('Annie', 'Whats up?');
showMessage('And');

// Returning a value

function sum(a, b) {
	return a + b;
}

let result = sum(1,3);
alert(result);

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Do you have permission from your parents?');
	}
}

let age = prompt('How old are you?', 18);

if(checkAge(age)) {
	alert('Access Granted!');
} else {
	alert('Access Denied!');
}

function showPrimes(n) {
	nextPrime: for (let i = 2; i < n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue nextPrime;
		}

		alert(i)
	}
}
showPrimes(30);

// Tasks

function checkAge(age) {
	return (age > 18) ? true: confirm('Do you have your parents permission to access this page?');
}
checkAge(20);
