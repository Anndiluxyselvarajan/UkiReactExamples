
import React, { Component } from 'react'
import { Button} from 'react-bootstrap'
import { ThemeConsumer } from './ThemeContext'

class ThemedButton extends Component {
   render() {
       return (
           <ThemeConsumer>
               {
                   (theme) => {
                       return <Button variant={theme}>Click Me</Button>
                   }
               }
           </ThemeConsumer>
       )
   }
}

export default ThemedButton

