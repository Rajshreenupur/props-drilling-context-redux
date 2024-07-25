  // 1. Using for Loop:
  // Create a for loop that prints the numbers from 1 to 100. Modify the loop to print only the even numbers.
  // Finally, create a nested loop inside the for loop that prints the multiplication table for numbers 1 through 5.

  //   let arr = [];
  //   for (let i = 1; i <= 100; i++) {
  //     if (i % 2 == 0) arr.push(i);
  //   }
  //   console.log(arr, "even number");

  // let arrN = [];
  // for (let i = 1; i <= 5; i++) {
  //   for (let j = 1; j <= 10; j++) {
  //     let k = i * j;
  //     arrN.push(k);
  //   }
  // }
  // console.log(arrN, "multiplication table");

  //   2. Using for-of Loop:
  // Given an array of strings representing fruits:

  // const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
  // Write a for-of loop to print each fruit in the array.
  //  Then, modify the loop to print only fruits that contain the letter 'a'.
  //   Finally, create another for-of loop that prints the length of each fruit name.

  // for (let x of fruits) {
  //   console.log(x + x.length);
  // }

  //   3. Using for-in Loop:
  // Consider the following object:

  // const car = {
  //   brand: "Toyota",
  //   model: "Camry",
  //   year: 2020,
  //   color: "blue",
  // };
  // Write a for-in loop to print each key-value pair of the object.
  // Modify the loop to count the number of properties in the object.
  // Then, create another for-in loop to convert all string values to uppercase and log the updated object.

  // for (let x in car) {
  //   console.log(x, "variable");
  //   console.log(car[x], "value");
  // }

  // const keysArray = Object.keys(car);
  // const count = keysArray.length;
  // console.log("Number of keys: " + count);

  //   4. Using forEach Loop:
  // Given an array of numbers:
  // const numbers = [5, 10, 15, 20, 25];
  // Use the forEach method to calculate the sum of all numbers in the array.
  // Then, use another forEach loop to create a new array that contains each number squared.
  // Finally, write a forEach loop that prints numbers greater than 15.

  // let text = [];
  // let add = 0;
  // numbers.forEach(myFunction);

  // function myFunction(value) {
  //   add += value; //sum of all
  // }
  // console.log(add);
  // function myFunction(value) {
  //   let sqr = value * value; //squared of each value.
  //   text.push(sqr);
  // }

  // function myFunction(value) {
  //   if (value > 15) {  //greater than 15
  //     text += value;
  //   }
  // }

  // console.log(text);

  //   5. Using while Loop:
  // Write a while loop to print numbers from 10 to 1 in reverse order.
  // Modify the loop to skip printing the number 5.
  // Then, use another while loop to simulate a simple countdown timer from 10 to 0 with a 1-second interval between each number printed.
  // let text = "";
  // let i = 10;
  // while (i > 0) {
  //   //print numbers from 10 to 1 in reverse order
  //   text += i + " ";
  //   i--;
  // }

  // console.log(text);