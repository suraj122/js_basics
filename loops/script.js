'use strict';

While loops

let i = 0;

while(i < 3) {
	alert(i);
	i++;
}

while(i) alert(i--);


// Do while

let j = 0;

do {
	alert(j);
	j++
} while(j <= 3);


// For loop
let a = 0;
for( a = 0; a <= 3; a++) {
	// alert(a);
}
alert(a);

// Breaking the loop

let sum = 0;
 while (true) {

 	let value = +prompt("Enter a value", '');
 	if (!value) break;
 	sum += value;

 }
 alert('Sum: ' +sum);

for (let x = 0; x < 10; x++) {

 	if(x % 2) {
 		alert(x);
 	}
 	
}


// Labels for break/continue

outer: for (let k = 0; k < 3; k++) {
	for (let l = 0; l < 3; l++) {
		let input = prompt(`value at cords ${k},${l}`, '');
		if (!input) break outer;
	}
}
alert('done!')


// Tasks

let y = 3;
while(y) {
	alert(y--);
}

let z = 0;
while(++z < 5) alert(z);

let b = 0;
while(b++ < 5) alert(b);

for(let c = 0; c < 5; ++c) {
	alert(c);
}
for (let d = 0; d < 5; d++) {
	alert(d);
}

for(let e = 0; e <= 10; e++) {
	if(e % 2 == 0) {
		alert(e);
	}
}

// let f = 0;
// while( f < 3) {
// 	alert(`number ${f}!`);
// 	f++;
// }

// let number;

// do {
// 	number = prompt("Enter a number greater than 100", 0);
// } while(number <= 100 && number);



let num = prompt('Enter a number', 0);

prime:
for (let n = 2; n <= num; n++) {
	for (let p = 2; p < n; p++) {
		if ( n % p == 0) continue prime;
	}
	alert(n);
}


