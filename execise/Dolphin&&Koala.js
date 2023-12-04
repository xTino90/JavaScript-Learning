// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;
// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;

// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;
// const koalaScore1 = 109;
// const koalaScore2 = 95;
// const koalaScore3 = 106;

// let dolphinAvgPoint = (97 + 113 + 101) / 3;
// let koalaAvgPoint = (109 + 95 + 106) / 3;
// console.log(dolphinAvgPoint, koalaAvgPoint);

// if ((dolphinAvgPoint > koalaAvgPoint) && (dolphinAvgPoint && koalaAvgPoint > 100)) {
//     console.log("The winner is Dolphin Team!");
// } else if ((dolphinAvgPoint < koalaAvgPoint) && (dolphinAvgPoint && koalaAvgPoint > 100)) {
//     console.log("The winner is Koala Team!");
// } else {
//     (dolphinAvgPoint > 100 === koalaAvgPoint > 100)
//     console.log("Draw!!!");
// };


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5. Ignore draws this time
// Test data:

// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 
`strict mode`;


// function calcAverage(score1, score2, score3) {
//     const calc = (score1 + score2 + score3) / 3;
//     return calc;
// }
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgTeamDolphin = calcAverage(85, 54, 41);
const avgTeamKoala = calcAverage(23, 34, 27);

console.log(avgTeamDolphin, avgTeamKoala);

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphin Win!(${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koala Win!(${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log("No Team Wins!");
    };

    return checkWinner;
}

checkWinner(avgTeamDolphin, avgTeamKoala);




