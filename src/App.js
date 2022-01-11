import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//Pages and components
import Apply from './pages/Apply'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;