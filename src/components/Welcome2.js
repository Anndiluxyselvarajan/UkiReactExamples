import React, { Component } from 'react'
import Hello from './Hello'

class Welcome extends Component {
   constructor(props) {
       super(props)
       this.state = {
            name: 'React Tutorial'
       }
   }
  
   render() {
       return (
           <div>
               <Hello name={this.state.name}/>
           </div>
       )
   }
}
export default Welcome

