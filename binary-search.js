function binarySearch(array, target, leftmostIndex = 0) {
    const middle = Math.floor(array.length / 2);
    console.log('middle:', array[middle])
    console.log('leftmostIndex:', leftmostIndex)
    console.log('target:', target)
    if (array[middle] === target) return leftmostIndex + middle;
    if (array.length === 1) {
        console.error('Target not found.')
        return -1;
    } 
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    if (target < array[middle]) {
        return binarySearch(left, target);
    } else {
        return binarySearch(right, target, middle + leftmostIndex);
    }
}


console.log(binarySearch([1, 2, 3, 5, 30, 42], 421));