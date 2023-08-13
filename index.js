const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice (2,4);
  }


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(value){
        return multiplier * value
    }
}
 const fare = createFareMultiplier()

function fareDoubler(fare){
    return fare * 2
    }

function fareTripler(fare){
    return fare * 3
} 



function selectDifferentDrivers(drivers,x) {
 return x(drivers)
}

