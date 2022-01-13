import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import HomePage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import LoginPage from "./pages/loginPage/loginPage"
import RegisterPage from "./pages/registerPage/registerPage"
import GamesPage from './pages/shopPage/shopPage';
import DetailedGame from './components/DataProduct/DataProduct';
import games from './data/Products/dataArray';
import CartPage from './pages/cartPage/cartPage';
import CheckoutPage from './pages/checkoutPage/checkoutPage';
import Userprofile from './pages/ProfileUsers/ProfileUsers';


function App() {
  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));

  return (
    <div className="App">
     <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
     <Routes>
     <Route exact path="/" element={<HomePage />} />
     <Route exact path="/login" element={<LoginPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/register" element={<RegisterPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/sports" element={<GamesPage />} />
     <Route exact path="/games/:title" element={<DetailedGame games={games} setLoggedUser={setLoggedUser}/>} />
     <Route exact path="/cart" element={<CartPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/checkout" element={<CheckoutPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/profile" element={<Userprofile setLoggedUser={setLoggedUser} loggedUser={loggedUser} />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
