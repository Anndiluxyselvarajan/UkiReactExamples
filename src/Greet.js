import React from 'react'

const  Greet=(props)=> {
    return(
        <div>
        <h4> Name - {props.name}  {props.fathername} </h4>
        {props.children}
        </div>
        )  
}
export default Greet