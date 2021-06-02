import React, { Component } from 'react'
import axios from 'axios'

class RepositoryList extends Component {
  constructor(props) {
      super(props)
      this.state = {
           repositories: [],
           errorMessage: ''
      }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/Biruntha/repos')
        .then(response => {
            this.setState({
                 repositories: response.data
            })
        })
        .catch(error => {
            console.log(JSON.stringify(error))
             this.setState({
                 errorMessage: error.message
             })
        })
}

render() {
    const { repositories, errorMessage } = this.state
    return (
        <div>
            List of Repositories
            {
                repositories.length ?
                repositories.map(repository => <div key={repository.id}>Repo Name : { repository.name }. Repo Description : {repository.description}</div>) :
                null
            }
  {
                  errorMessage ? <div> { errorMessage } </div> : null
              }
          </div>
      )
  }
}
export default RepositoryList
