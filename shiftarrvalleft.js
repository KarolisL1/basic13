function shiftleft(arr) {
    let first = arr.shift();
    arr.push(first);
    return arr;
}

var newArr = shiftleft([1, 2, 3, 4, 5]);
console.log(newArr);