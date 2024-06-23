import express from "express";
const app = express();
const port = 5000;


app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "Server is ready"})
    }
)

app.post('/', (req, res) =>{
    const data = req.body;
    console.log(data);

    //res.send({message: `Genre ${data.genre} and year: ${year}`})
})



app.listen(port, ()=>console.log(`Listening to port ${port}`))
