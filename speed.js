function speedDetector(speed) {
    const speedLimit = 70;
    let kmPerDemeritPoint = 5;
    const pointsLimitForSuspension = 12;
// 70 km/hr is like the constant/fixed mark. if it changes a condition must apply.
    if (speed < speedLimit) {
        console.log("OK");
        return 0; // else create a formula for calculating points deduction according to the speed travelled
    } else {
        const pointsAboveLimit = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${pointsAboveLimit}`);
        
        if (pointsAboveLimit > pointsLimitForSuspension) {
            console.log("LICENSE SUSPENDED");
        }
        
        return pointsAboveLimit;
    }
}


