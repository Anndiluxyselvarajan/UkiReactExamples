import React, { Component } from 'react'
import WithCounter from  './WithCounter.js'


class ClickCounter extends Component {
//    constructor(props) {
//        super(props)
//        this.state = {
//             count: 0
//        }
//    }
  
//    incrementCount = () => {
//            this.setState((prevState) => ({
//             count: prevState.count + 1
//         }))
//     }

render() {
    const { count ,incrementCount} = this.props
    return (
       <button onClick={incrementCount}>{this.props.name}Clicked {count} times</button>
    )
}
}
export default  WithCounter(ClickCounter ,3)
