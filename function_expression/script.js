'use strict';

// Function Expressions
let sayHi = function() {
	alert("Hello!");
};

let func = sayHi;

func();
sayHi();

// Callback functions

function ask(question, yes, no) {
	if(confirm(question)) yes()
		else no();
}

function showOk() {
	alert("You agreed.");
}

function showCancel() {
	alert("You cancel the execution.");
}

ask("Do you agree?", 
	function() {alert("You agreed")},
	function() {alert("You cancel the execution");} 
);

let age = prompt('What is your age?', 18);

// let welcome;

// if(age > 18) {
// 	welcome = function welcome() {
// 		alert("Hello!");
// 	} 
// } else {
// 	welcome = function welcome() {
// 		alert("Greetings");
// 	}
// }
// welcome();

let welcome = (age > 18) ?
	function() {alert("Hello");} :
	function() {alert("Greetings"); };

welcome();

let sayHello = function(name) {
	alert(`Hello ${name}`);
}
sayHello("John")

// Arrow Functions

let sum = (a, b) => a + b;

alert(sum(2, 3));

let double = n => n * 2;

alert(double(3));

let sayOye = () => alert("Oye");

sayOye();

let room = prompt("Room Number?", 0);

let enter = (room > 17) ?
	() => alert("welcome") :
	() => alert("Go to hell");

enter();

let add = (a, b) => {
	let result = a + b;
	return result;
}

alert(add(3, 4));

// Tasks

let askQues = (question, yes, no) => {
	if(confirm(question)) yes()
		else no();
}

askQues("what is your name",
	() => alert("Hello"),
	() => alert("Greetings")
);



