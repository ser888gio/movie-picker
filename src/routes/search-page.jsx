import {useState} from "react";
import axios from 'axios'
import "./search-page/index.css"

function SearchPage(){

    const [post, setPost] = useState({
        genre: '',
        year: ''
    });

    const handleInput = (event)=> {
        setPost({...post, [event.target.name] : event.target.value});
    };

    const handleSubmit = async ()=>{
        console.log(post, typeof post);
        await axios.post("/send-data", {post})
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    return (
            <form onSubmit={handleSubmit} action="/submit-data">
                <label htmlFor="genre">Genre: </label>
                <input type="text" id="genre" name="genre" placeholder="Enter genre" onChange={handleInput}/>
                <label htmlFor="year">Year: </label>
                <input type="text" id="year" name="year" placeholder="Enter year" onChange={handleInput}/>
                <button type = "submit">Search</button>
            </form>
    )
}

export default SearchPage;