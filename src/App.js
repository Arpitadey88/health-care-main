
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div >
  );
}

export default App;
