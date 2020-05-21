import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    //goes through each post and returns an array of the userIds
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));

    //theres a cool refactor for this in video 194
}

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
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

//this is the not memoize'd version
// export const fetchUser = (id) => async dispatch => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// };

//the memoize stops a fetch being called if that fetch has already been done - theoretically but theres an issue with this because it's a function in a function
// export const fetchUser = function(id) {
//     return _.memoize( async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);
//         dispatch({ type: 'FETCH_USER', payload: response.data})
//     });
// }

//this is a good version to solve the overfetching problem
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
// //the underscore represnts that the function is a private function that other developers should not use
// const _fetchUser = _.memoize(async(id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });

//the only issue with this is that you can only fetch a user ONCE, even if the data changes afterwards you cannot get the new changes so you may need to do the same function but without the memoize again

//alternative solution to the one above, this one is the best solution - action creates in action creators (video 192 on udemy) - the solution is at the top
export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
};