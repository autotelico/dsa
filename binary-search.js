/**
 * @param {number[]} array
 * @param {number} target
 * @return {number}
 */
var search = function(array, target, leftmostIndex = 0) {
    const middle = Math.floor(array.length / 2);
    console.log('middle:', middle)
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
        console.log(`middle value is ${array[middle]}, greater than the target ${target}.`)
        return search(left, target, leftmostIndex);
    } else {
        console.log(`middle value is ${array[middle]}, smaller than the target ${target}.`)
        return search(right, target, middle + leftmostIndex);
    }
};