
// Too busy
const findmax = function (number) {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log("It's too busy now, come back later");

// Come in, adults
const age = function (age) {
    if (age > 18) {
        return age = "come in"
    } else if (age < 18) {
        return age = "This is a club for adults"
    }

}

console.log(age(19));
//expected return is come in
console.log(age(7));
// expected return is this is a club for adults


//calculate average five numbers
const grades = [80, 77, 88, 95, 68];

function getAvg(grades) {
    const total = grades.reduce((acc, c) => acc + c, 0);
    return total / grades.length;
}

Math.round((grades));

const average = getAvg(grades);
console.log(average);

var array = [2340, 2440, 2468, 2500, 2510, 3081, 85119, 64647, 65924, 70770, 75923, 12469, 3793, 5325, 2340, 2380, 2340, 2340, 5057, 3778, 2500, 2455, 2340, 2373];
Math.round(array.reduce(function (a, b) { return a + b }) / array.length)