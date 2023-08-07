/**
 * @param {string} s
 * @return {number}
 */
 let romans = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "IX": 9,
        "X": 10,
        "XL": 40,
        "L": 50,
        "XC": 90,
        "C": 100,
        "CD": 400,
        "D": 500,
        "CM": 900,
        "M": 1000
    } 
    
let subtractions =["IV","IX","XL","XC","CD","CM"];

var romanToInt = function(s) {
    let num = s.split(""); 
    let sum = 0;
    for (let i=0; i<num.length; i++){
        if(subtractions.includes(num[i]+num[i+1])){
            let str = num[i]+num[i+1].toString(); 
            sum += romans[str];
            i++;
        } else {
        sum += romans[num[i]];
        }
    }
    return sum; 
};

