import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';   
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);  

  return (
    <>
      {/* Show LoginPopup only if showLogin is true */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className='app'>
        {/* Navbar can open the login popup */}
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>

      <Footer />   
    </>
  );
}

export default App;
