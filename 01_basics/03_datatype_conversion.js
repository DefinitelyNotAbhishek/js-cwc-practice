/* let score = "33"

let convert = Number(score)
console.log(convert)
console.log( typeof convert)
@DefinitelyNotAbhishek ➜ /workspaces/js-cwc-practice (main) $ node 01_basics/03_datatype_conversion.js
33
number

so a normal string gets easily converted to number 

let score = "33c"

let convert = Number(score)
console.log(convert)
console.log( typeof convert)

@DefinitelyNotAbhishek ➜ /workspaces/js-cwc-practice (main) $ node 01_basics/03_datatype_conversion.js
NaN
number

so here the number gets converted to NaN (not a number) however the datatype gets converted to 
a number */

// let score;

// let convert = Number(score)
// console.log(convert)
// console.log( typeof convert)

// let score= null

// let convert = Number(score)
// console.log(convert)
// console.log( typeof convert)

// @DefinitelyNotAbhishek ➜ /workspaces/js-cwc-practice (main) $  node 01_basics/03_datatype_conversion.js
// 0
// number

// In case of null we get 0 converted as a number 

// let score = true

// let convert = Number(score)
// console.log(convert)
// console.log( typeof convert)
// @DefinitelyNotAbhishek ➜ /workspaces/js-cwc-practice (main) $ node 01_basics/03_datatype_conversion.js
// 1
// number

// for true we get 1 as number and 0 for false 


// ************************************ Operations ******************************* //
console.log(1 + 2); //type of will be a Number
console.log("1" + 2); //type = string Output = 12
console.log( 1 + "2"); //type = string Output = 12
console.log("1" + "2"); //type = string Output = 12
console.log("1" + 2 + 2); //type = string Output = 122
console.log(1 + 2 + "3"); //type = string Output = 33
console.log(1 + "2" + 3); //type = string Output = 123


// so According to the ECMA standarizations if there is a string concatenatyion inthe begeinning than the entire is 
// a string conversion and if there is a another datatype let us say Number than the addition is done first unless
// the sring is concatinated and the overal type is string only 




