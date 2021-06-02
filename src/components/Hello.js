import React, { Component } from 'react'

class Hello extends Component {
   render() {
       return (
           <div>
               <h3>Welcome to {this.props.name}</h3>
           </div>
       )
   }
}

export default Hello
