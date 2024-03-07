"use strict"; //treat all js code as new version


// Javascript standards  are set by Ecmascript

// Datatypes

let myName  = "Abhishek"; //string
let myAge = 22; //integer
let myNumber = BigInt(8825373082) ;
//  used to store big numbers as int store 2 to the powerr of 52 useful 
// for big websites like x,youTube etc 
let MyEmployment = false; //boolean
let MyWeatherToday = null; //we cant use 0 always as like in temperature case 
let MySalary; //undefined 


console.table([myName,myAge,myNumber,MyEmployment,MySalary,MyWeatherToday])

console.log(typeof(myAge)) //used to figure out the datatype
