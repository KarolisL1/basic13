function zerooutnum(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
            //arr.push()
        }
    }
    return arr;
}

console.log(zerooutnum([1, -7, 3, -4, 5]));