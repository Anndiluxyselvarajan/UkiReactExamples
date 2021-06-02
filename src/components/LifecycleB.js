import React, { Component } from 'react'

class LifecycleB extends Component {
   constructor(props) {
       super(props)
       console.log('LifecycleB constructor')
   }

   static getDerivedStateFromProps(props, state) {
       console.log('LifecycleB getDerivedStateFromProps')
       return null
   }
  
   render() {
       console.log('LifecycleB render')
       return (
       <div>LifecycleB++++++++</div>
       )
   }

   componentDidMount() {
       console.log('LifecycleB componentDidMount')
   }
}
export default LifecycleB;