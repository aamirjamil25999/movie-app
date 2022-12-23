;

//{
//     type : 'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }
// {
//     type: 'DECREASE_COUNT',

// }
// action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITS';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE ';
// action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}
export function addFavourites(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}
export function removeFromFavourites(movie){
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}
export function setShowFavourites(val){
    return {
        type: SET_SHOW_FAVOURITE,
        val
    }
}


