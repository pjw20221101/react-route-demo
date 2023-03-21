import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";

function App() {
  return (
    <div className="root-wrap">
        <Header />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } /> 
            <Route path="/movies" element={ <Movies /> } />             
            <Route path="/tv" element={ <Tv /> } />             
            <Route path="/movie/:title" element={ <MovieDetail /> } />  
            <Route path="/*" element={ <NotFound />} />      
          </Routes>  
        </BrowserRouter>
    </div>
  );
}

export default App;
