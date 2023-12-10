"strict mode";
//-------------------------------Part 1---------------------//

// const country = "Italy";
// const continent = "Europe";
// let population = 60;
// const isIsland = false;
// const languege = "Italian";

// // let halfPop = population / 2;
// // let pop1 = population ++;
// // let finlandPop = population > 6;
// // let avgPop = population > 33;

// const description = `${country} is in ${continent}, and its ${population} million people speak ${languege}!`;
// console.log(description);

// // if (population > 33) {
// //   console.log(`${country}'s population is above avarage`);
// // } else {
// //   console.log(
// //     `${country}'s population is ${33 - population} million below avarege`
// //   );
// // }
// // console.log(
// //   "9" - "5", //4
// //   "19" - "13" + "17",//617
// //   "19" - "13" + 17,//23
// //   "123" < 57,//false
// //   5 + 6 + "4" + 9 - 4 - 2//1143
// // );

// // const nunNeighbours = Number(
// //   prompt("How many neighbour countries does your country have?")
// // );

// // if (nunNeighbours === 1) {
// //   console.log("Only 1 border!");
// // } else if (nunNeighbours > 1) {
// //   console.log("More then 1 border");
// // } else {
// //
// //   console.log("no border");
// // }

// // if (languege && population < 50 && !isIsland) {
// //   sarah = console.log("You should live in Portugal");
// // } else {
// //   sarah = console.log("Italy does not meet your criteria");
// // }

// // switch (languege) {
// //   case ("chinese", "mandarine"):
// //     console.log("MOST number of native speakers!");
// //     break;
// //   case "spanish":
// //     console.log("2nd place in number of native speakers");
// //     break;
// //   case "english":
// //     console.log("3rd palce");
// //   case "hindi":
// //     console.log("Number 4");
// //     break;
// //   case "arabic":
// //     console.log("5th most spoken language");
// //     break;
// //   default:
// //     console.log("Great language too :D");
// // }

// population > 33
//   ? console.log("Italy's population is above avarege")
//   : console.log("Italy's population is below average");
//-------------------------------Part 2---------------------//
let country;
let population;
let capitalCity;

describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital citi id ${capitalCity}`;
};

const desItaly = describeCountry("Italy", 60, "Rome");
const desSpanish = describeCountry("Spanish", 44, "Madrid");
const desHolland = describeCountry("Holland", 12, "Amsterdam");

console.log(desItaly, desHolland, desSpanish);
