import React, { Component } from 'react'
import axios from 'axios'

class RepositoryList extends Component {
  constructor(props) {
      super(props)
      this.state = {
           Popular: [],
           errorMessage: ''
      }
  }
  componentDidMount() {
    axios.get('https://api.themoviedb.org/movie/Populor?api_key=a3ef6d961c9cfc2362a62c93961c3abe')
        .then(response => {
            this.setState({
                Popular: response.data.result
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
    const { Popular, errorMessage } = this.state
    return (
        <div>
           Overview of Spase sweepers
            {
                Popular.length ?
                Popular.map(repository => <div key={repository.id}>Movie score  : { repository .Popular }</div>) :
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
