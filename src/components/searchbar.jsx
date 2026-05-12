import { useState } from "react"
import { MovieCard } from "./moviecard"


export const SearchBar = ({ searchedMovie, setSearchedMovie, fetchedData, setQuery }) => {

    const handleClick = event => {
        event.preventDefault()
        setQuery(searchedMovie)
    }

    const handleChange = event => {
        setSearchedMovie(event.target.value)
    }

    return (
        <>
            <div className="searchbar text-center border border-gray-400 w-9/10 min-h-20 rounded-xl">
                <section className="searchdiv border border-gray-400 border-1 w-7/10 rounded-3xl">
                    <input
                        className="w-4/5 h-10 text-3xl outline-0 text-orange-600 font-bold"
                        type="text"
                        placeholder="Search for a movie"
                        value={searchedMovie}
                        onChange={handleChange}
                    />
                    <button onClick={handleClick}>🔍</button>                    
                </section>

            
                <div>
                    <section id="list">
                        <MovieCard
                            fetchedData={fetchedData} />
                    </section>
                </div>
            </div>
        </>
    )
}