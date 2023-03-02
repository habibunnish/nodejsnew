/*1st way ans */
const car=require('./exposingFunction.js');
console.log('car datas'+car);

/*2nd way ans */
const honda=require('./exposingFunction.js');
const cars=honda.cars;
console.log(cars);

// or
const details=require('./exposingFunction.js').cars

//or using destructing assignment way
const {detailss}=require('./exposingFunction.js');