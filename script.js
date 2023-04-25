// Task1 
//  element -in deyeri null ve undefined olmayanlari qaytar
// let data = [
//     { name: 'daniel', age: 45 },
//     { name: 'john', age: 34 },
//     { name: 'robert', age: null },
//     { name: 'jen', age: undefined },
//     { name: null, age: undefined }];

// newData = data.filter((data, idx, arr) => {
//     return data.age != null && data.age != undefined
// })
// console.log(newData)




//Task2
// her telebenin pointini 30 bal artirin
// const students = [
//     { name: "Leyla", points: 500 },
//     { name: "Akif", points: 500 },
//     { name: "Fikret", points: 3000 },
//     { name: "Rashad", points: 500 },
//     { name: "Turkan", points: 1900 },
//     { name: "Sabir", points: 1000 },
//     { name: "Idris", points: 340 },
//     { name: "Nijat", points: 940 },
//     { name: "Ismet", points: 1780 },
// ];

// students.forEach((stu => stu.points += 30))
// console.log(students)




// Task 3
// - isharesini / ile deyishin
// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
// console.log(bdays.join('/'))




// Task4 
// butun regemlerini yuvarlaqlashdirin
let numbers = [1.5, 2.56, 5.1, 12.33];
// numbers=numbers.map((number)=>{
//     return Math.round(numbers)
// });
// console.log(numbers)




// Task 5
// Verilmish stringdeki ededleri cemleyin --> reduce 
// const b = "5,4,3,2,1";
// const bArr = b.split(' ')
// console.log(bArr)
// let bArray = [5, 4, 3, 2, 1]
// const initialValue = 0;
// const sumWithInitial = bArray.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );
// console.log(sumWithInitial);



//Task sekil1
var arr=[32,25,85,89,45,76,7,41,2,12];
/*a*/
// console.log(arr)
/*b*/
// console.log(Math.max(...arr));
/*c*/
// arr.push(15)
// console.log(arr)
/*d*/
// arr.shift(0)
// console.log(arr)
/*e*/
// arr.sort(function(x,y){
//     return x-y
// })
// console.log(arr[arr.length-1])
/*g*/
// arr.splice(3,0,43)
// console.log(arr)
/*h*/
// arr.forEach((nums,index,arr)=>console.log(arr))
/*i*/
// newArr=arr.map((element,idx,arr)=>{
//    if (arr.length[i]>40){
//     console.log(newArr)
//    }
// })




//Task sekil2
// let students=([
//     {name:"Steve"},
//     {name:"Mike"},
//     {name:"John"}
// ])
// function getStudentNames(students){
//     let names=students.map(students=>students.name);
//     return names;
// }
// let  names=getStudentNames(students)
// console.log(names)




