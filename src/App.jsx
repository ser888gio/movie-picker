import './App.css'
import DisplayMovies from "./routes/display-movies.jsx";
import SearchPage from "./routes/search-page.jsx";
import {Routes, Route} from "react-router-dom"

function App() {

  return (
      <Routes>
        <Route path = "/" element = { <SearchPage/> }></Route>
        <Route path = "/display-movies" element = { <DisplayMovies/> }></Route>
      </Routes>
  )


}

export default App
