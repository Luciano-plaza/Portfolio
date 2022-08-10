import { Route, Routes } from "react-router-dom";
import Home from '../src/Components/Home/indexSpanish.jsx'
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
