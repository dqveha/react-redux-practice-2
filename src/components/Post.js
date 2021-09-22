import React, { Component } from 'react';
import axios from 'axios'

class Post extends Component {
  state = {
    post: null
  }
  componentDidMount(){
    // console.log(this.props)
    const id = this.props.match.params.post_id
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        })
      })
    
  }
  render() {
    const post = this.state.post ? (
      <div className="post card" key={this.state.post.id}>
          <div className="card-content">
            <span className="card-title">{this.state.post.title}</span>
            <p>{this.state.post.body}</p>
          </div>
        </div>
    ) : (
      "This is not a post"
    )
    return (
      <div className="container">
        {post}
      </div>
    )
  }

}

export default Post