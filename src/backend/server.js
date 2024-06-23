import express from "express";
const app = express()
app.use(express.json());
const port = 5174

app.get('/', (req, res) => {
    res.send("Server is ready")
    }
)

//In vite.config i got deifned the path through /api
app.post('/send-data', async (req, res) =>{
    const genre = req.body.genre;
    const year = req.body.year;

    res.send({message: `Genre ${genre} and year: ${year}`})
})



app.listen(port, ()=>console.log(`Listening to port ${port}`))
