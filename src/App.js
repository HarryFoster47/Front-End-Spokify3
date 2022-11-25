import { Routes, Route, Router } from "react-router-dom"
import Albums from "./pages/albums"
import Songs from "./pages/songs"

function App() {
  return (  
    
<div className="App">
      <Routes>
        <Route path="songs" element={ <Songs/> } />
        <Route path="albums" element={ <Albums/> } />
      </Routes>
    </div>
  );
}

export default App;

