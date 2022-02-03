function min_max_avg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            if (arr[i] < min) {
                min = arr[i];
            }
            sum += arr[i];
        }

    }
    console.log(min, max, sum / arr.length);
}

min_max_avg([1, 2, 3, 4, 5]);