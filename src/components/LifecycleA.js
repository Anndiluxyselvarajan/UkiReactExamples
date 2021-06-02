import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
   constructor(props) {
       super(props)
       console.log('LifecycleA constructor')
   }

   static getDerivedStateFromProps(props, state) {
       console.log('LifecycleA getDerivedStateFromProps')
       return null
  }
  
   render() {
       console.log('LifecycleA render')
       return (
       <div>
           LifecycleA *******
           <LifecycleB/>
       </div>)
   }

   componentDidMount() {
       console.log('LifecycleA componentDidMount')
   }
}
export default LifecycleA;
