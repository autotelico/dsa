function bubbleSort(numArray: number[]): number[] {
    for (let i = numArray.length; i != 0; i--) {
        for (let j = 0; j < i; j++) {
            if (numArray[j] > numArray[j+1]) {
                let temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }
    }
    return numArray;
}

console.log(bubbleSort([2, 5, 120, 6, 1]));
