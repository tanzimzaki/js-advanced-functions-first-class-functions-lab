const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

function createFareMultiplier(num){
      return function (number){
         return number * num
      }
}

function fetchSpecifiedDrivers(array, func){
    return func(array)
}

function fareTripler(num){
    return num * 3
}

function fareDoubler(num){
    return num * 2
}

