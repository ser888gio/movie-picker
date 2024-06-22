// eslint-disable-next-line no-undef
import express from "express";

import cors from "cors";

const app = express()
app.use(express.json());
const port = 5174

app.listen(port, ()=>console.log(`Listening to port ${port}`))

app.post('/submit-data', async (req, res) =>{
    const genre = req.body.genre;
    const year = req.body.year;

    res.json({message: `Genre ${genre} and year: ${year}`})
})

