// const markHeight = 1.69;
// const johnHeight = 1.95;
// const markMass = 78;
// const johnMass = 95;

// let bmiMark = 78 / 1.68 ** 2;
// console.log(bmiMark); // 27.636054421768712

// let bmiJohn = 95 / 1.95 ** 2;
// console.log(bmiJohn); //24.983563445101908

// markHeightBmi = bmiMark > bmiJohn;
// console.log(markHeightBmi); // true

// if (bmiMark > bmiJohn) {
//   console.log(`MarkBMI (${bmiMark}) is higher than JohnBMI (${bmiJohn})`);
// } else {
//   console.log(` JohnBMI(${bmiJohn}) is higher than MarkBMI (${bmiMark})`);
// }

const john = {
  name: "John",
  lasName: "Smith",
  height: "1,69",
  mass: "78",
  calcBMI: function (mass, height) {
    return mass / height ** 2;
  },
};
john["bmi"] = john.calcBMI(78, 1.69).toFixed(2);

const mark = {
  name: "Mark",
  lasName: "Miller",
  height: "1,95",
  mass: "92",
  calcBMI: function (mass, height) {
    return mass / height ** 2;
  },
};

mark["bmi"] = mark.calcBMI(95, 1.95).toFixed(2);

console.log(
  `${john.name} ${john.lasName}'s BMI(${john.bmi}) is higher than ${mark.name} ${mark.lasName}'s BMI(${mark.bmi})!`
);
