const returnFirstTwoDrivers = function(drivers){
    console.log(drivers.slice(0,2))
    console.log(drivers)
    return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
    console.log(drivers)
    return drivers.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ]

const createFareMultiplier = function (multiplier) {
   return function(fare){
       return (multiplier*fare)
   }
}
const fareDoubler = createFareMultiplier(2) 
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers,lastDrivers ){
    return lastDrivers(drivers)
}