const sumAll = function (num1, num2) {

    //errors
    if (num1<0 || num2 < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    let sum = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum+=i;
        }
    }
    else if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            sum+=i;
        }
    }
    else {
        sum=num1+num2;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
