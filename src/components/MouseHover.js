import React, { Component } from 'react'
import WithCounter from  './WithCounter.js'

class HoverCounter extends Component {
//    constructor(props) {
//        super(props)
//        this.state = {
//             count: 0
//        }
//    }
  
//   incrementCount = () => {
//            this.setState((prevState) => ({
//                count: prevState.count + 1
//            }))
//        }

   render() {
       const { count, incrementCount } = this.props
       return (
           <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
       )
   }
}
export default WithCounter(HoverCounter ,5)
