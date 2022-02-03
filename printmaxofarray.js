function printmaxofarray(arr) {
    var max = arr[0];
    for (var i=1; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

printmaxofarray([1, 7, 3, 4, 5]);