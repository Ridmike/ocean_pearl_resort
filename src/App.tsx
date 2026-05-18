import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Rooms from './pages/Rooms';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
