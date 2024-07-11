/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {

    const ind_stack = [];

    const res = [];

    for(let char of s){
        if(char == "(") {
            ind_stack.push(res.length)
        } else if(char == ")") {
            const popped = ind_stack.pop(); //pop last index
            let reversed = res.slice(popped).reverse() //slice the section of res from index to end and rverser it
            res.splice(popped, reversed.length, ...reversed) //spluce the reversed back in from the index to the length 
        } else {
            res.push(char)
        }
    }

    return res.join('')
};