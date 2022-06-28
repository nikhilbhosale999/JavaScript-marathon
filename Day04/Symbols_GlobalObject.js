// console.log("Symbol and Global Object");

//Boolen

// let score = 100
// if (score ==+ 100) {
//     console.log("Great Score");
// }

/* False values are 
undefined
null
0
-0
NaN
""
*/
// console.log(typeof(false.toString()));

// null : Special object whose value is "No object". "Null" is language keyword
// console.log(typeof(null));

// undefined : pre defined globle constant
// console.log(typeof(undefined));
//Both Null and undefined absence of value

// if (null === undefined) {
//     console.log("OK");
// }
// else{
//     console.log("Not Ok");
// }

//Symbol
// let mySym = Symbol("P1")
// let mySym1 = Symbol("P1")

// let priority  = Symbol.for("P2")
// let priority2  = Symbol.for("P2")

// console.log(mySym === mySym1);

/**
 * Use of Symbol
 */
// const WIN = "WINDOW"
// const AILE = "AILE"
// const MID = "MID"
// const crew = "WINDOW"
// function getSeat(getValue) {
//     switch (getValue){
//         case WIN:
//             return "SeaT is alloted"
//         case AILE:
//                 return "SeaT is alloted"
//          case MID:
//             return "SeaT is alloted"
//     }
// }
// console.log(getSeat(crew));
// when we run the funtion getValue, crew is not in the switch case 
//but value of WIN and crew is same thats why it showing "Seat is alloted"

// So avoide this type of bug use Symbol as below
// const WIN1 = Symbol("WINDOW")
// const AILE1 = Symbol("AILE")
// const MID1 = Symbol("MID")
// const crew1 = "WINDOW"
// function getSeat1(getValue1) {
//     switch (getValue1){
//         case WIN1:
//             return "SeaT is alloted"
//         case AILE1:
//                 return "SeaT is alloted"
//          case MID1:
//             return "SeaT is alloted"
//         default:
//             console.log("No SEAt alloted");
//     }
// }
// console.log(getSeat1(crew1));

//// Global objects

// constant like:undefined, NaN
// function like: isNaN(), parseInt(), eval()
//Constructor  like: Date(), Sting(), Object()
// Node Globale and browser global  
// console.log(this);

//in ES2020 globalThis

console.log(globalThis);
