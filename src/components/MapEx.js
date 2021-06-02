import React from 'react'
function  MapEx(){
var  numbers = [1,2,3,4,5];
const doubleValue =numbers.map((number) => {
    return (number*2)
})

console.log(doubleValue);

return(
    <div>
        {doubleValue}
    </div>
)
}