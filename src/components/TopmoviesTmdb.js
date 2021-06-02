import React, { Component } from 'react'
import axios from 'axios'

class RepositoryList extends Component {
  constructor(props) {
      super(props)
      this.state = {
           TvShows: [],
           errorMessage: ''
      }
  }
  componentDidMount() {
    axios.get('https://www.themoviedb.org/movie/581389')
        .then(response => {
            this.setState({
                TvShows: response.data
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
    const { TvShows, errorMessage } = this.state
    return (
        <div>
           Overviem of Spase sweepers
            {
                TvShows.length ?
                TvShows.map(repository => <div key={repository.id}>Movie score  : { repository .userscore }</div>) :
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
