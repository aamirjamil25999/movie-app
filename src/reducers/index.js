
import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITE } from '../actions';
// import { ADD_FAVOURITE } from '../actions';
import { combineReducers } from 'redux';
const intialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
}


export  function movies(state = intialMoviesState, action) {
    console.log("MOVIES REDUCERS");
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list : action.movies
    //     }
    // }
    // return state;
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            {
                return state;
            }
    }
}


const initialSearchState = {
    result: {}
};
export function search (state = initialSearchState, action){
    console.log("SEARCH REDUCERS");
    return state;
}

const intialRootState = {
    movies: intialMoviesState,
    search: initialSearchState
}

// export default function rootReducer(state = intialRootState, action){
//     return{
//     movies: movies(state.movies,action),
//     search: search(state.search, action)
//     }
// }

export default combineReducers({
    // movies: movies,
    // search: search
    movies,
    search

})