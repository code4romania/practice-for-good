import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';
import Organizations from '../../pages/organizations/Organizations';
import Programs from '../../pages/programs/Programs';
import Layout from '../containers/Layout';
import Contact from '../../pages/contact/Contact';
import About from '../../pages/about/About';
import Organization from '../../pages/organizations/Organization';
import Program from '../../pages/programs/Program';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Landing page */}
          <Route index element={<Landing />}></Route>

          {/* Practice programs page */}
          <Route path="practice-programs" element={<Programs />}></Route>

          {/* Practice program details */}
          <Route path="practice-programs/:id" element={<Program />}></Route>

          {/* NGO list page */}
          <Route path="organizations" element={<Organizations />}></Route>

          {/* NGO details page */}
          <Route path="organizations/:id" element={<Organization />}></Route>

          {/* Contact page */}
          <Route path="contact" element={<Contact />}></Route>

          {/* About page */}
          <Route path="about" element={<About />}></Route>
        </Route>

        {/* Wild Card */}
        <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
