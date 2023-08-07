/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = []
    for(let i=0; i< strs[0].length; i++){
      let letter = strs[0].charAt(i);
      for(let j=1; j<strs.length; j++){
        if(strs[j].charAt(i) !== letter){
          return prefix.join("");
        }
      } 
        prefix.push(letter);
      }
    return prefix.join("");
}

