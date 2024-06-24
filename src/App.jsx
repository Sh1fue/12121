// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Basket from "./Components/Basket";
import Catalog from "./Components/Catalog";
import ContactPage from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import ProfilePage from "./Components/Lk";
import Onas from "./Components/Onas";
import Modal from './modal/ModalRegistration';
import YourComponent from './Components/test';
import DetailForm from './Components/AdminPanel';
import Slider from './Components/Slider';
import PrivateRoute from './modal/PrivateRoute';
export default function App() {
  return (
      <Router> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/onas" element={<Onas />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/test" element={<YourComponent />} />
          <Route path="/admin" element={
                        <PrivateRoute requiredRole="ADMIN">
                            <DetailForm />
                            </PrivateRoute>
                            } />
          <Route path="/Slider" element={<Slider />} />
        </Routes>
      </Router> 
  );
}
