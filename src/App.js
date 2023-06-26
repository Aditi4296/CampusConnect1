import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Main"
import Banalebhai from './Banalebhai';
import Home from "./Home";
import RequestItem from './RequestPage';
import RentBuy from './RentBuy';
import CheckOut from "./checkout";
import SellPage from "./sellpage"
export default function App()
{
    return(
        <div>
        <Router>
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/account" element={<Banalebhai/>} />
            <Route path="/login" element={<Main/>} />
            <Route path="/request" element={<RequestItem/>}/>
            <Route path="/store" element={<RentBuy/>}/>
            <Route path="/checkout" element={<CheckOut/>}/>
            <Route path="/sell" element={<SellPage/>}/>
            </Routes>
        </Router>
        </div>
    );
}