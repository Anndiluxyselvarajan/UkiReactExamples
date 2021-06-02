import React , { Component } from 'react'
import { Link, Route } from 'react-router-dom'



const Contact = (props) => {
   console.log(props)
   return <p>{ props.match.params.id }</p>}


class Contact45 extends Component{
    render(){
  return(
      <div>
          <h1>Welcome to Contact page </h1>
          <h3>  Select contact Id</h3>
              <ul>
                  <li>
                      <link to="/Contact 1/">Contact 1</link>
                  </li>
                  <li>
                       <link to="/Contact 2/">Contact 2</link> 
                  </li>
                  <li>
                       <link to="/Contact 3/">Contact 3</link>
                  </li>
                  <li>
                      <link to="/Contact 4/">Contact 4</link>
                  </li>
                  <li>
                       <link to="/Contact 5/">Contact 5</link>
                  </li>
                  
              </ul>
          <Route path="/contact id"  Component={Contact}/> 
      </div>
  );
    }

}
 
export default Contact45
