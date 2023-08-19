/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try {
        let array = await Promise.all([promise1, promise2])
        return array.reduce((acc, elem) => {
            acc += elem 
            return acc
        },0)
    } catch {
       console.log("failed")
    }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */