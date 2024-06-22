import express from "express";
import {post} from "axios";
import fetch from "node-fetch";

const app = express()
app.use(express.json());
const port = 5174
const API_KEY = "f0e7d92d2294faa8867a03d09c327ec7"
app.get('/', (req, res) => {
    res.send("Server is ready")
    }
)

//In vite.config i got deifned the path through /api
app.post('/send-data', async (req, res) =>{
    const genre = req.body.genre;
    const year = req.body.year;
    console.log(post)

    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGU3ZDkyZDIyOTRmYWE4ODY3YTAzZDA5YzMyN2VjNyIsIm5iZiI6MTcxOTAzODEzNy44ODgzNzIsInN1YiI6IjY2NzNkOWU5NmYxYTFmN2Y0NThmMTg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UH_ycR7sNcRXOW0vQN40SbWgKHJNrgm0O0lZ9ps3S44'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

    res.send({message: `Genre ${genre} and year: ${year}`})
})



app.listen(port, ()=>console.log(`Listening to port ${port}`))
