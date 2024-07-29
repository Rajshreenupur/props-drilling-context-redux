// Calculate the percentage for each student based on their scores in various subjects.
// Filter out students with a percentage greater than 80%.
// Identify the topper (student with the highest percentage) and the failer (student with the lowest percentage).
// Create a new array with students ranked according to their percentages.



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

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
// const array3 = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4];


// const combineArr=[...array1,...array2,...array3]
// console.log(combineArr,"Combined Array");

// for(let i=0;i<combineArr.length;i++){
// for(let j=i+1;j<combineArr.length;j++){
//     if(combineArr[j]<combineArr[i])
//         {
//             temp = combineArr[j]
//             combineArr[j]=combineArr[i]
//             combineArr[i] = temp
//         }
// }
// }
// console.log(combineArr,"Sorted Combined Array")

// let removeDuplicate=combineArr.filter((item,
// index) => combineArr.indexOf(item) === index);

// console.log(removeDuplicate,"Removed Duplicate Array");




// You are given a list of employees, each with a unique ID, name, department, and an array of project objects. 
// Each project object contains the project name, deadline (in YYYY-MM-DD format), and status (either "completed" or "pending").
// Your task is to:

// Count the total number of projects each department is working on.
// Identify the employee with the most completed projects in each department.
// List all projects that have missed their deadlines (considering today's date).
// Generate a summary for each department, containing:
// The total number of projects.
// The name of the employee with the most completed projects.
// A list of all missed deadline projects.



const employees = [
    {
      id: 1,
      name: "Alice",
      department: "Engineering",
      projects: [
        { name: "Project A", deadline: "2024-07-01", status: "completed" },
        { name: "Project B", deadline: "2024-07-25", status: "pending" },
        { name: "Project C", deadline: "2024-06-30", status: "completed" },
      ],
    },
    {
      id: 2,
      name: "Bob",
      department: "Engineering",
      projects: [
        { name: "Project D", deadline: "2024-07-15", status: "completed" },
        { name: "Project E", deadline: "2024-07-20", status: "pending" },
      ],
    },
    {
      id: 3,
      name: "Charlie",
      department: "Sales",
      projects: [
        { name: "Project F", deadline: "2024-06-15", status: "completed" },
        { name: "Project G", deadline: "2024-06-20", status: "completed" },
      ],
    },
    {
      id: 4,
      name: "David",
      department: "Sales",
      projects: [
        { name: "Project H", deadline: "2024-07-10", status: "pending" },
       { name: "Project I", deadline: "2024-07-05", status: "completed" },
      ],
    },
    {
      id: 5,
      name: "Eve",
      department: "Marketing",
      projects: [
        { name: "Project J", deadline: "2024-06-15", status: "pending" },
        { name: "Project K", deadline: "2024-07-25", status: "completed" },
      ],
    },
  ];
  

// const arr=employees[index];
// console.log(arr);


// const arr1=employees[index].projects;
// console.log(
//     arr1,"projects"
// )


// employees[index].projects[0].name="Utkarsh project" 
// console.log(
//     arr1,"projects"
// )


// let findEmp=employees.find((val)=>val.name == "Eve")
// let findStatus=findEmp.projects.find((val)=>val.status=="pending")
// console.log(findEmp,"without update",findStatus,);
// findStatus.status="completed"
// console.log(findEmp,"with update",findStatus,);


// let project_name ="Project k";

// // Remove "Project K" from the employees array
// const updatedEmployees = employees.map(employee => ({
//     ...employee, 
//     projects: employee.projects.filter(project => project.name !== project_name)
// }));

// console.log(updatedEmployees);


// const employees1 = [
//     {
//       id: 1,
//       name: "Alice",
//       department: "Engineering",
//       deadline: "2024-06-15",
//       status: "pending" 
//     },
//     {
//         id: 2,
//         name: "Aliceee",
//         department: "Engineering",
//         deadline: "2024-06-15",
//         status: "completed" 
//       },
//       {
//         id: 3,
//         name: "Aliceeee",
//         department: "Engineering",
//         deadline: "2024-06-15",
//         status: "completed" 
//       },
//       {
//         id: 4,
//         name: "Ace",
//         department: "Engineering",
//         deadline: "2024-06-15",
//         status: "pending" 
//       }
// ]

// let addArr=employees1.map((value)=>{
             
//     console.log( {
//         id: value.id,
//         name: value.name,
//         department: value.department,
//         project:[{
//             deadline: value.deadline,     
//             status:  value.status 
//         }]
//     })
// })
// // console.log(addArr, "this is last")


// const numbers = [45, 4, 9, 16, 25];

// const filterArr=[];
// const value=16
// const over16=filterFunction(value,numbers)

// function filterFunction(value,numbers) {
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]>=value){
//             filterArr.push(numbers[i]);
//         }
//   }

// return filterArr;
// }
// console.log(over16);




const ArrObj=[{
    name:"Rajshree Nupur",
    age:22,
    DOB:16/9/2001
},
{
    name:"Neha",
    age:20,
    DOB:20/10/2001
},
{
    name:"Sakshi",
    age:25,
    marks:34,
    DOB:18/8/2001
}]



const filterObj=[];
 const findObj=filterObjFunc(22,'age','lower');

function filterObjFunc(value,key,condition){
    for (let index = 0; index < ArrObj.length; index++) {
        const element = ArrObj[index];
        if((condition=='equal' && element[key]==value)|| (condition=='greater' && element[key]>value)|| (condition=='lower' && element[key]<value)){
                filterObj.push(element);
         }

    }
    return filterObj;
}
console.log(findObj)
