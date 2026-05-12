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
            <div className="searchbar flex justify-center items-center border border-gray-400 w-9/10 min-h-20 rounded-xl">
                <input
                    className="w-100 h-10 text-3xl outline-0 text-orange-600 font-bold"
                    type="text"
                    placeholder="Search for a movie"
                    value={searchedMovie}
                    onChange={handleChange}
                />
                <button onClick={handleClick}>🔍</button>
            </div>
            <div>
                <section id="list">
                    <MovieCard
                        fetchedData={fetchedData} />
                </section>
            </div>
        </>
    )
}