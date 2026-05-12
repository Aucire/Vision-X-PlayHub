import { useState } from "react"

export const MovieCard = ({ fetchedData }) => {
    const apidata = fetchedData?.Search || []

    return (
        <div className="moviegrid min-h-150 w-9/10 grid grid-cols-4 gap-5 rounded-xl">
            {apidata.map((value) => (
                <div key={value.imdbID}>
                    <img src={value.Poster} alt="Movie Poster" className="w-full h-7/10 rounded-xl" />
                    <h2 className="text-white">{value.Title}</h2>
                </div>
            ))}
        </div>
    )
}