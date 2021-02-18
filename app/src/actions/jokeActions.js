import axios from 'axios';

export const GET_JOKE_LOADING = 'GET_JOKE_LOADING';
export const GET_JOKE_SUCCESS = " GET_JOKE_SUCCESS";
export const GET_JOKE_FAIL = 'GET_JOKE_FAIL';

export const getJoke = () => {
    return dispatch => {
        dispatch({type:GET_JOKE_LOADING});

        axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(res =>{
            dispatch({type:GET_JOKE_SUCCESS, payload:{setup: res.data.setup, delivery:res.data.delivery } })

        })
        .catch(err=>{
            dispatch({type:GET_JOKE_FAIL, payload: err.data.error})
        })
    }
}

// export const getJokeLoading = () => {
//     return({ type: GET_JOKE_LOADING });
// } 
// export const getJokeSuccess = (setup, delivery) => {
//     return({ type: GET_JOKE_SUCCESS, payload:{setup: setup, delivery:delivery} });
// } 
// export const getJokeFail = (error) => {
//     return({ type: GET_JOKE_FAIL, payload:error });
// } 
