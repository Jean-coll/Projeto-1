
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/menu/navbar"
import Home from './pages/Home';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Produtos" element={<Produtos/>} />
            <Route path="/Contato" element={<Contato/>} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App
