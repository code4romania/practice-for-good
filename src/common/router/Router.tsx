import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from '../../pages/landing/Landing';
import Programs from '../../pages/programs/Programs';
import Layout from '../containers/Layout';
import About from '../../pages/about/About';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Landing page */}
          <Route index element={<Landing />}></Route>

          {/* Practice programs page */}
          <Route path="practice-programs" element={<Programs />}></Route>

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
