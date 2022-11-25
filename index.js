// Code your solution in this file!
const headquaters = 42;

function distanceFromHqInBlocks(passengerLocation) {
    if (passengerLocation > 42 ){
        return (passengerLocation - headquaters);
    }
    
    else{
        return(headquaters - passengerLocation);
    }
}

function distanceFromHqInFeet(passengerLocation){
    const distanceTravelledInFeet = distanceFromHqInBlocks(passengerLocation);
    return distanceTravelledInFeet * 264;
}

function distanceTravelledInFeet(distanceTravelledInFeet, distanceFromHqInBlocks) {
    let distance;
    if (distanceTravelledInFeet > distanceFromHqInBlocks) {
        distance = distanceTravelledInFeet - distanceFromHqInBlocks;
    }
    
    else {
        distance = distanceFromHqInBlocks - distanceTravelledInFeet
    }
    return distance * 264;
}
  
function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
    if (distance <= 400) {
        return fare = 0;
    }

    else if (distance < 2000) {
        return fare = 0.02*(distance-400);
    }

    else if (distance < 2500) {
        return fare = 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}
