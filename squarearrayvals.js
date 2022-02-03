function squarearrayvals(arr){
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

console.log(squarearrayvals([1, 2, 3, 4, 5]));