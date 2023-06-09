function binarySearch(arr, neededNumber, start = 0, end = arr.length - 1) {
    const middleIndex = Math.floor((start + end) / 2);
    const middleNumber = arr[middleIndex];

    if (start > end) return null;

    if (neededNumber === middleNumber) {
        return middleNumber;
    }

    if (neededNumber > middleNumber) {
        return binarySearch(arr, neededNumber, middleIndex + 1, end);
    } else {
        return binarySearch(arr, neededNumber, start, middleIndex - 1);
    }
}

function binarySearchWhile(arr, neededNumber) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        const middleIndex = Math.floor((start + end) / 2);
        const middleNumber = arr[middleIndex];

        if (neededNumber === middleNumber) {
            return middleNumber;
        }

        neededNumber > middleNumber
            ? (start = middleIndex + 1)
            : (end = middleIndex - 1);
    }

    // for (let i = start; i <= end; i = start) {
    //     const middleIndex = Math.floor((start + end) / 2);
    //     const middleNumber = arr[middleIndex];

    //     if (neededNumber === middleNumber) {
    //         return middleNumber;
    //     }

    //     neededNumber > middleNumber
    //         ? (start = middleIndex + 1)
    //         : (end = middleIndex - 1);
    // }

    return null;
}

const numbers = [11, 23, 34, 412, 542, 612, 741, 851, 922];

console.log(binarySearch(numbers, 745));

console.log(binarySearchWhile(numbers, 612));
