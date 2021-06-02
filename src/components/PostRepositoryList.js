import React, { Component } from 'react'
import axios from 'axios'

class PostRepository extends Component {
  constructor(props) {
      super(props)
      this.state = {
           name: '',
           description: '',
      }
  }
  changeName = (e) => {
    this.setState({
        name: e.target.value
    })
}
changeDescription = (e) => {
 this.setState({
     description: e.target.value
 })
}

submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://api.github.com/Anndiluxyselvarajan/repos', this.state, {
                 headers: {
                     'Authorization': 'token 57fe531c00ee89feb577c15a46cd099541d6568d' 
                     
                 }
             })
             .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
  
    render() {
        const { name, description } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Github Repository Name</label>
                        <input type='text' name='name' value={name} onChange={this.changeName}/>
                    </div>
                    <div>
                      <label>Github Repository Description</label>
                      <input type='text' name='description' value={description} onChange={this.changeDescription}/>
                  </div>
                  <button type='submit'>Submit</button>
              </form>
          </div>
      )
  }
}
export default PostRepository
