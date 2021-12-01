
const number = function (number) {
    if (number > 100) {
        return number = true;
    } else if (number < 100) {
        return number = false;
    };
}
console.log(number(101));
//expected return = true
console.log(number(99));
//expected return = false

// function produce something