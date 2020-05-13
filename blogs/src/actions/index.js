import jsonPlaceholder from '../apis/jsonPlaceholder';

//this one is the middleware so looks a bit different to other actions
//with redux thunk you can now use async/await again, where it couldn't be used in vanilla redux
//we don't need the getState for this function but it could be needed for others - you would pass getState as a parameter on the async function
//this is the old layout
// export const fetchPosts = () => {
//     return async (dispatch, getState) => {
//         const response = await jsonPlaceholder.get('/posts');

//         dispatch({ type: 'FETCH_POSTS', payload: response })
//     };
// };

//this is the new refactored layout that does the same as above but looks neater, it is simple a function returning a function
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};