  // let rows = 5;

  // // pattern variable carries the final pattern in string format
  // let pattern = "";

  // // outer loop runs for `rows` no. of times
  // for (let i = 1; i <= rows; i++) {
  //   // inner loop runs for i
  //   for (let j = 1; j <= i; j++) {
  //     pattern += "*";
  //   }
  //   // Add a new line character after contents of each line
  //   pattern += "\n";
  // }
  // console.log(pattern);

  // let pattern = "";
  // for (let i = 1; i <= 5; i++) {
  //   for (let j = 5; j >=i; j--) {
  //     pattern += "*";
  //   }
  //   pattern += "\n";
  // }
  // console.log(pattern);

  // let row = 5 ;
  // let pattern = "";
  // for (let i = 1; i <= row; i++) {
  //   for (let j = row; j >= i; j--) {
  //     pattern += i;
  //   }
  //   pattern += "\n";
  // }
  // console.log(pattern);


  // let row = 5;
  // let pattern = "";
  // for (let i = 1; i <= row; i++) {
  //   for (let j = row; j >= 1; j--) {
  //     pattern += " * ";
  //   }
  //   pattern += "\n";
  // }
  // console.log(pattern);

 

  // let row = 5;
  // let pattern = "";
  // for (let i = 1; i <= row; i++) {
  //   for (let j = 1; j <=row; j++) {
  //     if((i%2 == 0 && j%2 == 0) || (i%2 != 0 && j%2 != 0) ){
  //       pattern += "*";

  //     }else{
  //       pattern += "-";

  //     }
  //   }
  //   pattern += "\n";
  // }
  // console.log(pattern);


//   let row = 13; //(did utkarsh which is  working dynamically) very good
//   let col = row; 
//   let pattern = "";
  
//   let print=0
//  let mid=Math.round(row/2)-1 
//   for (let i = 0; i <col; i++) {
//     for (let j = 0; j <print; j++) {
//       pattern += " ";
//      }
//     for (let j = 0; j <row; j++) {
//       pattern += "*";
//      }
//      for (let j = 0; j <print; j++) {
//       pattern += " ";
//      }
     
//     pattern += "\n";
//     if(i>=mid){
//       print-=1
//       row+=2
      
//     }
//     else{
//       row -= 2

//       print += 1
//     }
//   }
//   console.log(pattern);



// let str = "rajshreee nupur" ;
// let spaces = "";

// for (let i = 0; i < Math.floor(str.length ); i++) {
//   spaces += " ";
//   let substr = str.slice(i, str.length - i);
//   console.log(spaces+substr);
// }


