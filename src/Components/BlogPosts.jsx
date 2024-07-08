import React, { Component } from 'react';
import SideBar from './SideBar/SideBar';
import Content from './Content/Content';



class BlogPosts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: null,
            currentPost: null,
        }
    }
    async getPosts() {
        const post = await fetch('http://localhost:8000/posts')
        return await post.json()
    }

    componentDidMount() {
        this.getPosts().then(post => {
            this.setState({
                posts: post,
                currentPost: 0,
            })
        })
    }

    handelChangeCurrent = (index) => {
        console.log(index)
        this.setState({currentPost: index})
    }

    render() {
        return (
            <>
                <SideBar posts={this.state.posts} handelChangeCurrent={this.handelChangeCurrent} />
                {this.state.currentPost != null ? <Content post={this.state.posts[this.state.currentPost]} /> : null}


            </>
        );
    }
}

export default BlogPosts;