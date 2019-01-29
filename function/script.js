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

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm('Do you have permission from your parents?');
// 	}
// }

// let age = prompt('How old are you?', 18);

// if(checkAge(age)) {
// 	alert('Access Granted!');
// } else {
// 	alert('Access Denied!');
// }

function showPrimes(n) {
	nextPrime: for (let i = 2; i < n; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue nextPrime;
		}

		alert(i)
	}
}
showPrimes(30);

// function showPrime(n) {
// 	for(i = 2; i < n; i++) {
// 		if(!isPrime(i)) continue;
// 		alert(i); 
// 	}
// }
// function isPrime(n) {
// 	for (let i = 2; i < n; i++) {
// 		if (n % i == 0) return false;
// 	}
// 	return true;
// }

// Tasks
// Checking age
function checkAge(age) {
	return (age > 18) ? true: confirm('Do you have your parents permission to access this page?');
}
let age = prompt('How old are you?', 18)
checkAge(age);

// checking min number amont two
function min(a, b) {
	return (a < b) ? a : b;
}
alert(min(3, -4));

// Power of a number n times
function pow(x, n) {
	let result = x;
	for (let i = 1; i < n; i++) {
		result *= x; 
	}
	return result;
}
let x = prompt('x?');
let n = prompt('n?');

if (n < 1) {
	alert(`Power ${n} is not supported use an integer greater than 0`);
} else {
	alert(pow(x, n));
}
