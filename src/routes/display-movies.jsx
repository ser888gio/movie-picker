import Examples from '../records.json'
function DisplayMovies(){
    return(
        <>
            {
                //Check, if we have what to map. Mapping functions assigns to every element an attribute from json
                Examples && Examples.map(example => {
                    return (
                        <div className="movie-box" key= {example.id}>
                            <h1 id = "title">{example.title}</h1>
                            <p id = "rating">{example.vote_average}</p>
                            <p id = "desc">{example.overview}</p>

                            <div id = "genres">
                                {example && example.genres.map( genre =>{
                                    return(
                                        <div key = {genre.id}> {genre.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DisplayMovies;