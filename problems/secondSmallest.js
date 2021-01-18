/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/

function secondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    arr.forEach((num) => {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest) {
            secondSmallest = num
        }
    });
    return secondSmallest;
}

module.exports = secondSmallest
