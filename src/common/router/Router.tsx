import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';
import Layout from '../containers/Layout';
import Contact from '../../pages/contact/Contact';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Landing page */}
          <Route index element={<Landing />}></Route>

          {/* Contact page */}
          <Route path="contact" element={<Contact />}></Route>
        </Route>

        {/* Wild Card */}
        <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
