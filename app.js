console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " = FIZZBUZZ");
    }
    else if (i % 3 == 0) {
        console.log(i + " = FIZZ");
    }
    else if (i % 5 == 0) {
        console.log(i + " = BUZZ");
    }
    else {
        continue;
    } 
}


console.log("EXERCISE 3:\n==========\n");
let num = 1;

while (num < 100) {
    let output = "";
    if (num % 3 == 0) {
        output += "FIZZ";
    }
    if (num % 5 == 0) {
        output += "BUZZ";
    }
    console.log(num + " = " + output);
    num++;
}

// console.log("EXERCISE 3 part 2:\n==========\n");
// let number = 1;
// do {
//     let output = "";
//     if (number % 3 == 0) {
//         output += "FIZZ";
//     }
//     if (number % 5 == 0) {
//         output += "BUZZ";
//     }
//     console.log(number + " = " + output);
//     number++;
// } while (num < 100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log("n = " + n);
console.log("value = " + value);
for (i = 0; i < n; i++) {
    
    if (i == value) {
        console.log("Found value!");
        break;
    }
    else {
        console.log("Did not find value");
    }
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let buzzDivisor = Math.round(Math.random() * (1 - 10) + 1);
let m = Math.round(Math.random() * (1 - 1000) + 1);
let start = Math.round(Math.random() * (1 - 10) + 1);

console.log("fizzDivisor = " + fizzDivisor);
console.log("buzzDivisor = " + buzzDivisor);
console.log("m = " + m);
console.log("start = " + start);

for (i = start; i < m; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i + " = FIZZBUZZ");
    }
    else if (i % fizzDivisor == 0) {
        console.log(i + " = FIZZ");
    }
    else if (i % buzzDivisor == 0) {
        console.log(i + " = BUZZ");
    }
    else {
        continue;
    } 
}