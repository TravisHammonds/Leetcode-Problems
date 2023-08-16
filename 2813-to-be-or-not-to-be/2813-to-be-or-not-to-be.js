/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(x) {
        if (x !== val) {
            throw new Error("Not Equal")
        } 
        return true
    }

    function notToBe(y) {
       if( y === val) {
           throw new Error("Equal")
       }
       return true
    }
    return {
        toBe,
        notToBe
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */