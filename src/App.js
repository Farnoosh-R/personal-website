import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>}/>
      <Route path="/about" element={<Layout><About /></Layout>}/>
      <Route path="/portfolio" element={<Layout><Portfolio /></Layout>}/>
      <Route path="/contact" element={<Layout><Contact /></Layout>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
