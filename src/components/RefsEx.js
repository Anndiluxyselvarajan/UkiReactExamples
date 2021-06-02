import React, { Component } from 'react'

class RefsDemo extends Component {
   constructor(props) { 
    super(props); 
    this.callRef = React.createRef(); 
  } 

  compomenetDidMount() {
      this.callRef.current.focus();
  }
  
//   addingRefInput = () => { 
//     aleart (this.callRef.current.value); 
//   } 
  
  render() { 
    return ( 
      <div> 
        <h2>Adding Ref to DOM element</h2> 
        <input type="text" ref={this.callRef} /> 
        <input type="button" value="Add text input" onClick={this.addingRefInput}/> 
      </div> 
    ); 
} 
}
export default RefsDemo
