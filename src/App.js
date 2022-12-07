import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Health from "./pages/Health";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/health' element={<Health/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
