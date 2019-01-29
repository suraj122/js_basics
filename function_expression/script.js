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




