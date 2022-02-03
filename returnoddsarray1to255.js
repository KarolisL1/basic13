function returnoddsarray1to255() {
    arr = [];
    for (var i=1; i<256; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(returnoddsarray1to255());