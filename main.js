let lab1 = [0, 0, 0, 0, 5, 0, 0]
let lab2 = [0]
let lab3 = [0]
let lab4_5 = [10, 0, 0, 0, 0, 0, 0]
let lab6 = [5, 5, 10, 5, 5, 10]
let lab8 = [0]


function get_sum(lab) {
    let sum = 0;
    for (let i = 0; i < lab.length; i++) {
        sum += lab[i];
    }
    return sum;
}

function main(...labs) {
    const result = {}
    let helper = 1;
    for (let i = 0; i < labs.length; i++) {
        if (i == 3) {
            result[`lab4_5`] = labs[i];
            helper++;
            continue;
        }
        if (i==5) {
            helper++;
        }
        result[`lab${i + helper}`] = labs[i];
    }
    return result;
}

let labs = main(lab1, lab2, lab3, lab4_5, lab6, lab8);
console.log(labs)
for (let i in labs) {
    console.log(`${i} scores sum is ${get_sum(labs[i])}`);
}