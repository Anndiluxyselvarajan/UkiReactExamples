import React, {Component} from 'react'

const WithCounter= (WrappedComponent, incrementBy)=>{

    class NewComponent extends Component{
        constructor(props) {
            super(props)
            this.state = {
                 count: 0
            }
        }
       
        incrementCount = () => {
                this.setState((prevState) => ({
                 count: prevState.count + incrementBy
             }))
         }
         render(){
             return (
                 <WrappedComponent count={this.state.count} 
                 incrementCount={ this.incrementCount} {...this.props}/>
             )
         }
    }
    return NewComponent
}
export default WithCounter