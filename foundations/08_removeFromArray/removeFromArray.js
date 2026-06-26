const removeFromArray = function (array, ...b) {
    return array.filter(item => !b.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
