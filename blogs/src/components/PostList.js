import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderList(){
        return this.props.posts.map((post, index) => {
            return (
                <div className="item" key={index}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        })
    }
    
    render(){
        return(
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return ({ posts: state.posts })
}

//the first argument of the connect function is the mapStateToProps for indicating that we have state to pass into this component, the second argument of the connect function is the action creator
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);