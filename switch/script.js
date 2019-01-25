'use strict';

let a = 2 + 2;

switch(a) {
	case 3:
		alert("Too Small");
		break;
	case 4:
		alert("Exactly");
		break;
	case 6:
		alert("Too large");
		break;
	default:
		alert("I dont know such values");
}

let b = 1;
let c = 0;

switch(+b) {
	case c + 1:
		alert("This runs, because +b is Exactly 1");
		break;

	default:
	alert("This doesent run");
}

let arg = prompt('Enter a value?')

switch(arg) {
	case '0':
	case '1':
		alert('One or Zero');
		break;

	case '2':
		alert('Two');
		break;

	case 3: 
		alert('Never Executes');
		break;

	default:
		alert('An unknown value');
}


// Tasks

let browser = prompt('Enter your browser name', '');

if(browser == 'Edge') {
	alert("You've got the Edge");
} else if ( browser == 'Chrome'
	|| browser == 'Firefox'
	|| browser == 'Safari'
	|| browser == 'Opera') {
	alert('Okay we support these browser too');
} else if (browser == '' || browser == null){
	alert('chose a browser name');
} else {
	alert('We hope this page looks ok');
}

let d = +prompt('d?', '');

switch(d) {
	case 0:
		alert(0);
		break;

	case 1:
		alert(1);
		break;

	case 2:
	case 3:
		alert('2, 3');
		break;

	default:
		alert('Hello');
}