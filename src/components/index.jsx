import { useEffect, useState } from "react";
import "./movies.css"
import { Title } from "./title";
import { SearchBar } from "./searchbar";

const key = import.meta.env.VITE_API_KEYS

export const Movies = () => {

    const [hider, setHider] = useState(false)
    const [fetchedData, setFetchedData] = useState({})

    const [searchedMovie, setSearchedMovie] = useState("")
    const [query,setQuery]=useState("batman")

    const [loading, setLoading] = useState(false)
    const [error,setError] = useState("")

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)

            try{
                const response = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${query}`)
                const data = await response.json()
                console.log(data);

                setFetchedData(data)
            }
            catch(err){
                setError(err)
                console.log(err)
            }  
            finally{
                setLoading(false)
            } 
        }

        fetchMovies()

    }, [query])

    return (
        <>
            <main className="p-10">
                <h1 className="title text-6xl">VISION X MOVIE PLATFORM</h1>
                <header className="head text-center w-9/10 min-h-50 rounded-xl">
                    <Title />
                </header>
                <section>
                    <div className={hider ? "show" : "hide"}>
                        <SearchBar
                            searchedMovie={searchedMovie}
                            setSearchedMovie={setSearchedMovie}
                            fetchedData={fetchedData}
                            setQuery={setQuery} 
                        />
                    </div>
                    {loading && <p> Loading {query}</p>}
                    <div className={hider ? "hide" : "show"}>

                    </div>
                </section>
            </main>
        </>
    )
}