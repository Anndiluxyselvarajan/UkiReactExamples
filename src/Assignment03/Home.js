import React from 'react';
import { Component } from 'react';
import Alert from 'react-bootstrap/Alert'


class Home extends Component{
    render(){
        return(
<Alert variant="primary">
  <Alert.Heading>Welcome to Book Shop</Alert.Heading>
  <p>
   Good friends, good books and a sleepy conscience : This is the ideal life
  </p>
  <hr />
  <p>
      Enjoy with Books
  </p>
  
</Alert>
        )
    }
    }
    export default Home