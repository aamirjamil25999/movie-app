
// import { render } from "@testing-library/react";
import React from "react";
import { data } from "../data";
// import { data } from './data'
import { addMovieToList, handleMovieSearch } from '../actions'

class Navbar extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            showResult: true,
            searchTxt: ''
        }
    }
    handleAddToMovie = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.state({
            showSearchResults: false
        });
    }

    handleSearch = () => {
        const { searchTxt } = this.state;
        this.props.dispatch(handleMovieSearch(searchTxt));

    }
    handleChange = (e) => {
        this.state({
            searchTxt: e.target.value
        });

    };

    render() {
        // const { movie } = this.props;
        const { showSearchResults } = this.state;

        return (
            <div className="nav">
                <div className="search-conitainer">
                    <input />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {showSearchResults && 
                        <div className="search-results">
                            <div className="search-result">
                                <img src="{data[0].Poster}" alt="sarch-pic" />

                                <div className="movie-info">
                                    <span>{data[0].Title}</span>
                                    <button onClick={() => this.handleAddToMovie(data[0])}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>

        );
    }
}


export default Navbar;
