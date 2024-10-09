'use strict';

// console.log('hello world');

// console.log(10);

// const age = 20;

// console.log(age);

// const username = 'mango';
// console.log(username);

// const productName = 'Droid';
// const pricePerItem = 2000;

// console.log(productName, pricePerItem);

// let username = 'Mango';
// username = 'papaya';

// console.log(username);

// const lolipop = 'chupa-chups';
// console.log(lolipop);

// const salary = 1250.18;
// console.log(salary);

// const description = 'javascript is awesome!';
// console.log(description);

// const isModalOpen = true;
// const isLoggedIn = false;
// console.log(isModalOpen);
// console.log(isLoggedIn);

// let value = null;
// console.log(value); // null

// let value;
// console.log(value); // undefined

// Хоча обидва значення null і undefined позначають відсутність значення, вони мають трохи різні семантики використання.
//  — null використовується для явної вказівки порожнього значення (точно відомо, що значення немає).
//  — undefined вказує на невизначеність значення змінної.

// const quantity = 17;
// console.log(typeof quantity); // виведе "number"

// const message = 'JavaScript is awesome!';
// console.log(typeof message); // виведе "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // виведе "boolean"

// let username;
// console.log(typeof username); // виведе "undefined"

// let status = null;
// console.log(typeof status); // виведе "object"

// const x = 5;
// const y = 8;
// console.log(x + y);

// const pricePerItem = 3500;
// const orderQuantity = 4;
// const totalPrice = pricePerItem * orderQuantity;
// console.log(totalPrice); //14000

// let age = 25;
// age += 1;
// console.log(age);

// const age = 24;
// const message = 'Poly is ' + age + ' years old!';
// console.log(message);

// console.log(String(5)); // "5"
// console.log(String(true)); // "true"
// console.log(String(false)); // "false"
// console.log(String(null)); // "null"
// console.log(String(undefined)); // "undefined"
// console.log('false' + null); // "falsenull"

// const guestName = 'Mango';
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

// const pricePerDroid = 800;
// const orderQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderQuantity + deliveryFee;
// console.log(totalPrice); //4850
// const message = `You order droids worth ${totalPrice} credits`;
// console.log(message);

// const productName = 'Repair droid';
// console.log(productName.length); //12

// const product = 'Repair droid';
// console.log(product[0]); // 'R'
// console.log(product[5]); // 'r'
// console.log(product[11]); // 'd'

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// function myltiply(x, y, z) {
//   x = 6;
//   y = 3;
//   z = 8;
//   console.log(`Result: ${x * y * z}`); //144
// }
// myltiply();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   console.log(a + b + c);
//   return a + b + c;
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   let calculateTotalPrice = pricePerItem * orderedQuantity;
//   return calculateTotalPrice;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
