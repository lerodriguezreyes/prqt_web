import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import Subscribe from './pages/Subscribe'
import Subscribirse from './pages/Subscribirse';

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Subscribe />} />
          <Route path="/esp" element={<Subscribirse />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
