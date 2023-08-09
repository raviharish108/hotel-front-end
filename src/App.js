import { Home } from "./pages/Home";
import { Hotel } from "./pages/Hotel";
import { List } from "./pages/List";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotel" element={<Hotel/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes> 
    </div>
  );
}

export default App;
