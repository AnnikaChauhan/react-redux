//it is much much better to add a switch statement instead of an if else statement to our reducer

export default (state = [],action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};