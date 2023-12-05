// Smar key car, work only for over 18 years old

const jonas = {

};

// jonas.fistName = "jonas";
// jonas.lastName = "something";
// jonas.age = 2047 - 1991;
// jonas.friends = ["Michael", "Pep", "Giuvan"];


jonas["firstName"] = "jonas";
jonas["lastName"] = "something";
jonas["age"] = 2047 - 1991;
jonas["driveLicense"] = false;
console.log(jonas);

jonas["saluta"] = function () {
    this.saluta = "hello everyone!!";
    return this.saluta;
}

console.log(jonas.saluta());

console.log(`${jonas.firstName} has ${jonas.age}-years old, and he has ${(jonas.driveLicense ? "a" : "no")} diriver's license. He says ${jonas.saluta}`);