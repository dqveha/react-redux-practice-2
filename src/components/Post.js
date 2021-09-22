import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id // gets info about route params
  return {
    post: state.posts.find(post => post.id === id)
  }
}
class Post extends Component {
  // state = {
  //   post: null
  // }
  // componentDidMount(){
  //   // console.log(this.props)
  //   const id = this.props.match.params.post_id
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       })
  //     })
  // } -- no more after having redux
  
  render() {
    const post = this.props.post ? (
      <div className="post card" key={this.props.post.id}>
          <div className="card-content">
            <span className="card-title">{this.props.post.title}</span>
            <p>{this.props.post.body}</p>
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



export default connect(mapStateToProps)(Post)