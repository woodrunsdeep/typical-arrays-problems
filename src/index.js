reducer = (accumulator, currentValue) => accumulator + currentValue;

compareNums = (a, b) => a - b;

exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return array.sort(compareNums)[0];
    }
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return array.sort(compareNums)[array.length - 1];
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return array.reduce(reducer) / array.length;
    }
}
