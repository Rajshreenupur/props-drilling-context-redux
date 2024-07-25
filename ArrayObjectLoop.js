// Calculate the percentage for each student based on their scores in various subjects.
// Filter out students with a percentage greater than 80%.
// Identify the topper (student with the highest percentage) and the failer (student with the lowest percentage).
// Create a new array with students ranked according to their percentages.

const { use } = require("react");


// const students = [
//     { name: "Alice", phone: "1234567890", age: 16, math: 85, science: 90, english: 78, hindi: 88, python: 95 },
//     { name: "Bob", phone: "1234567891", age: 17, math: 75, science: 80, english: 85, hindi: 70, python: 60 },
//     { name: "Charlie", phone: "1234567892", age: 15, math: 95, science: 98, english: 92, hindi: 94, python: 97 },
//     { name: "David", phone: "1234567893", age: 16, math: 55, science: 60, english: 58, hindi: 50, python: 45 }
//   ];
//   let highestPercentage = -1; // Set to a very low initial value
//   let lowestPercentage = 101; // Set to a very high initial value

// // students.forEach((element)=>{
// // let addMarks=(element.math+element.science+element.english+element.hindi+element.python);
// // let percentage=addMarks/5;
// // // console.log(percentage,`Percentage of ${element.name}`);

// // if(percentage>80){
// //     console.log(percentage,`${element.name} have greater than 80`);
// // }
// // })

// let studentRank=students.map(({name,math,science,english,hindi,python})=>{ //using destructing concept
//     let addMarks=(math+science+english+hindi+python);
//     let percentage=addMarks/5;
//     console.log(percentage,`Percentage of ${name}`);
  
//      // Determine if current student is the topper
//     //  if (percentage > highestPercentage) {
//     //     highestPercentage = percentage;
//     //     console.log(`Topper: ${name} with a percentage of ${highestPercentage}%`);

//     //     // topper = { name, percentage }; // Update topper details
//     // }

//     highestPercentage = (percentage > highestPercentage) ? (topper = { name, percentage }, percentage): highestPercentage;
   
//     lowestPercentage = (percentage < lowestPercentage) 
//     ? (failer = { name, percentage }, percentage)
//     : highestPercentage;

//     return {name,percentage};
//     })

// // Print the topper and failer details
// console.log(`Topper: ${topper.name} with a percentage of ${topper.percentage}%`);
// console.log(`Failer: ${failer.name} with a percentage of ${failer.percentage}%`);

// //studentRank.sort(function(a, b){return a - b});

// studentRank.sort((a, b) => b.percentage - a.percentage);
// // Log the ranked students
// console.log("Ranked Students:");
// studentRank.forEach((student, index) => {
//     console.log(`${index + 1}. ${student.name}: ${student.percentage}%`);
// });

// console.log("Greater Than 80% Students:");
// let filter80 = studentRank.filter(student => student.percentage > 80);
// console.log(filter80)


// const userDetails = {
//     // Profile information
//     profile: {
//       fullName: {
//         firstName: "John",
//         lastName: "Doe"
//       },
//       age: 30,
//       gender: "Male",
//       // Other profile-related keys
//     },
//     // Address information
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       state: "Anystate",
//       postalCode: "12345",
//       country: "CountryName",
//       // Other address-related keys
//     },
//     // Family information
//     family: {
//       spouseName: "Jane Doe",
//       children: [
//         { name: "Child One", age: 5 },
//         { name: "Child Two", age: 3 }
//       ],
//       // Other family-related keys
//     }
//   };

// let profileObj={...userDetails.profile.age,...userDetails.profile.name}
// let familyObj={...userDetails.family.children}
// let combinObj={...profileObj,...userDetails.profile.fullName,...userDetails.address,...userDetails.family}
// // console.log(combinObj);


// let text = "";
// for (let x in combinObj) {
//   text += x+"\n";
// }
// // console.log(text)

// // let chil 2":56

// let utkarshChild="";
// for(let x in familyObj){
//     utkarshChild +=familyObj[x].name+":"+familyObj[x].age+"\n";
// }
// console.log(utkarshChild);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
const array3 = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];


const combineArr=[...array1,...array2,...array3]
console.log(combineArr);


// for(let i=0;i<combineArr.length;i++){

// }