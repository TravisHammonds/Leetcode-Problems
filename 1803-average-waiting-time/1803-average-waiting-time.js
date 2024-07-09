/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let waitTime = 0;
    let currentTime = customers[0][0]
    for(let [arrivalTime, prepTime] of customers){

        //check if someone is in queue, if yes start order, else change currtime to next arrival time
        currentTime = currentTime >= arrivalTime ? currentTime : arrivalTime;

        //increase the current time by prep time
        currentTime += prepTime

        //incremement waitTime by the elapsed time 
        waitTime += currentTime - arrivalTime;
    }

    //average the wait times and return the answer
    return  waitTime / (customers.length); 
};