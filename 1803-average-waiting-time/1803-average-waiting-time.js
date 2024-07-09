/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    const waitTimes = [];
    let currentTime = customers[0][0]
    for(let customer of customers){

        //check if someone is in queue (if current time is >= customer[i][0]) if yes start order, else change currtime
        currentTime = currentTime >= customer[0] ? currentTime : customer[0];

        //increase the current time by prep time
        currentTime += customer[1]

        //subtract current time by current cusomter arrival time
        let currentCustomerWait = currentTime - customer[0]
        //insert the difference into the wait times array
        waitTimes.push(currentCustomerWait);
    }

    //average the wait times and return the answer
    let averageWaitTime = waitTimes.reduce((time, acc) => time + acc)

    return averageWaitTime / (customers.length); 
};