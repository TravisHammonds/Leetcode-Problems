/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    const waitTimes = [];
    let currentTime = customers[0][0]
    for(let [arrivalTime, prepTime] of customers){

        //check if someone is in queue (if current time is >= customer[i][0]) if yes start order, else change currtime
        currentTime = currentTime >= arrivalTime ? currentTime : arrivalTime;

        //increase the current time by prep time
        currentTime += prepTime

        //subtract current time by current cusomter arrival time
        let currentCustomerWait = currentTime - arrivalTime

        //insert the difference into the wait times array
        waitTimes.push(currentCustomerWait);
    }

    //average the wait times and return the answer
    return  waitTimes.reduce((time, acc) => time + acc) / (customers.length); 
};