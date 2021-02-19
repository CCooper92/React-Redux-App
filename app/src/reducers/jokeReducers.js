import { GET_JOKE_LOADING, GET_JOKE_SUCCESS, GET_JOKE_FAIL } from './../actions/jokeActions';

const initialState = {
 setup:'',
 delivery:'' ,
 isGetting: false,
 error: ''   
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(GET_JOKE_LOADING):
        return({
            ...state,
            isGetting: false
        });

        case(GET_JOKE_SUCCESS):
        return({
            ...state,
            setup: action.payload.setup,
            delivery: action.payload.delivery,
            isGetting: false
        });
        case(GET_JOKE_FAIL):
        return({
            ...state,
            error: action.payload,
            isGetting: false
        });

        default:
            return state;
    }
};