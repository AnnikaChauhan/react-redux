import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' },

    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    } 
    //we have the if statement to assume that we may have more actions and types in the future
    return selectedSong;
}

//this wires up the redicers to eachother, the keys of the object are what would show up in the state object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});