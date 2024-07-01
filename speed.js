function speedDetector() {
    //we use .value to get the value back rather than .innerHTML to print the value
    let speed = document.getElementById('speed').value;
    const speedLimit = 70;
    let kmPerDemeritPoint = 5;
    const pointsLimitForSuspension = 12;
    // 70 km/hr is like the constant/fixed mark. if it changes a condition must apply.
    if (speed <= speedLimit) {
        document.getElementById('print').innerHTML = "OK";
        return 0; 
        // else create a formula for calculating points deduction according to the speed travelled
    } else {
        const pointsAboveLimit = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        document.getElementById('print').innerHTML = `Points: ${pointsAboveLimit}`;
       
        
        if (pointsAboveLimit > pointsLimitForSuspension) {
            document.getElementById('print').innerHTML = "LICENCE SUSPENDED";
            
        }
        
        return pointsAboveLimit;
    }
}


