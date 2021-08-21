import React from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';
import Footer from '../Footer';

function Search() {

    const history=useHistory()

    const toHome=()=>{
        history.push("/homes")
    }
    return (
        <div className="search">
            <div className="search__header">
                <SearchIcon className="search__search" />
                <input type="text" placeholder="Search"></input>
            </div>

            <div className="search__feed">
                <p className="search__data">Travel</p>
                <p className="search__data">Style</p>
                <p className="search__data">Music</p>
                <p className="search__data">Cosmics</p>
                <p className="search__data">Love</p>
                <p className="search__data">Game</p>
                <p className="search__data">Day</p>
            </div>

            <div className="explore">
                <h2>No explore videos yet !</h2>
                <button onClick={toHome}>Go Back</button>
            </div>
            <div className="shas"></div>
        </div>
    )
}

export default Search
