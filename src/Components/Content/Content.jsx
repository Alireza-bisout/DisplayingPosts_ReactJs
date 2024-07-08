import React, { Component } from 'react';
import Posts from './Posts';
import Comments from './Comments';



class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: null,
        }
    }

    async getComments() {
        const comments = await fetch(`http://localhost:8000/comments?post-id=${this.props.post.id}`);
        return await comments.json();
    }

    setComments = () => { this.getComments().then(comments => this.setState({ comments })) }

    componentDidMount() {
        if (this.props.post) {
            this.setComments()
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.post.id !== this.props.id) {
            this.setComments()
        }
    }

    render() {
        return (
            <div className="container">
                <Posts data={this.props.post} />
                {this.state.comments != null ? <Comments data={this.state.comments} /> : null}

            </div>
        );
    }
}

export default Content;