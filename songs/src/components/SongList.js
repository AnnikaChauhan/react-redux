import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song, index) => {
            return (
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Selected
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

// gets the data from the store (state) and runs a function on it to get the data to render 
// the object that we return from the function is going to show up as props inside our component
// this reruns every time we change the redux state
const mapStateToProps = (state) => {
    // console.log(state);
    return { songs: state.songs };
}

// this is because the connect function is a function that returns a function so the first set of brakcets invoke the first function and the second set invoke the internal function
//the select song action creator is added here because there is a function that occurs when you click on one of the songs, there is an 'action creator' and this is not always the case
export default connect(mapStateToProps, { selectSong })(SongList);