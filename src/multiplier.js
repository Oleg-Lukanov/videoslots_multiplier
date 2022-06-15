/**
 * @param {Object[]} array
 *
 * @returns {number}
 */

  function multiplier(array) {
    let count = 0;

    for (const char of array) {
        if (char !== 0 && (char % 4 === 0 || char % 6 === 0)) {
            count++;
        }
    }

    return count;
}

module.exports = { multiplier };
