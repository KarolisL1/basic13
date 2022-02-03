function greaterthany(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}

console.log(greaterthany([1, 7, 3, 4, 5], 3));