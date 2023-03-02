/* 1st way :- using module.exports which will expose the object it points to*/
const car={
    brand:'ford',
    model:'fiesta'
}
module.exports=car;

/* 2nd way:- using exports this will allow u to import multiple object , funtion or data */
const hondaCar={
    newBrand:'ferrari',
    newModel:'fiesta'
}
exports.hondaCar=hondaCar;

// or 
exports.honda={
    br:'freaso',
    mod:'feost'
}