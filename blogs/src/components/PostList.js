import React, {Component} from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render(){
        return(
            <div>
                Post List
            </div>
        );
    }
}

//the first argument of the connect function is the mapStateToProps for indicating that we have state to pass into this component, the second argument of the connect function is the action creator
export default connect(null, { fetchPosts })(PostList);