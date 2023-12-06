// Smar key car, work only for over 18 years old

const jonas = {

};

// jonas.fistName = "jonas";
// jonas.lastName = "something";
// jonas.age = 2047 - 1991;
// jonas.friends = ["Michael", "Pep", "Giuvan"];


jonas["firstName"] = "jonas";
jonas["lastName"] = "something";
jonas["birthday"] = 1991;
jonas["driveLicense"] = false;
console.log(jonas);

jonas["calcAge"] = function () {
    this.Age = 2046 - this.birthday;
    return this.Age;
};
jonas["saluta"] = function () {
    this.saluta = "hello everyone!!";
    return this.saluta;
};

jonas["getSummary"] = function () {
    return `${this.firstName} has ${this.calcAge()}-years old, and he has ${(this.driveLicense ? "a" : "no")} diriver's license. He says ${this.saluta}`;
};
console.log(jonas.saluta());

console.log(jonas.getSummary());