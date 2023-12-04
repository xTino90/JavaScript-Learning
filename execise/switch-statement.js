const bill = 430;
let tip;
if (bill >= 50 && bill <= 300) {
    tip = 15
    // console.log("tip is 15%");
} else {
    tip = 20
    // console.log("tip is 20%");
}
let billTip = (bill * tip) / 100;
let totalPay = bill + billTip;

console.log(`The bill was ${bill}, the tip was ${billTip}, and the total value ${totalPay}`);

//-------------------------------TERNARY OPERETOR------------------------//

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}$, the tip was ${tip}$, and the total value ${bill + tip}$`);