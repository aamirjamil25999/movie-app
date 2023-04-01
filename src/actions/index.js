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
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST ';
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

export function addMovieToList(movie){
    return{
        type: ADD_MOVIE_TO_LIST,
        movie

    };
    
}

export function handleMovieSearch(movie){
        return function(dispatch) {
        const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=superman=${movie}`;
        fetch(url)
        .then(responce => responce.json())
        .then(movie => {
            console.log('movie',movie);
            // dispatch an action
            //  dispatch ({type: 'ADD_SEARCH_RESULT',movie})
        });
    }

    
}



