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
import { MENU_ROUTES_HREF } from '../constants/Menu.constants';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { parse, stringify } from 'query-string';

const Router = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{
          searchStringToObject: parse,
          objectToSearchString: stringify,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Landing page */}
            <Route index element={<Landing />}></Route>

            {/* Practice programs page */}
            <Route path={MENU_ROUTES_HREF.practice_programs} element={<Programs />}></Route>

            {/* Practice program details */}
            <Route path={`${MENU_ROUTES_HREF.practice_programs}/:id`} element={<Program />}></Route>

            {/* NGO list page */}
            <Route path={MENU_ROUTES_HREF.organizations} element={<Organizations />}></Route>

            {/* NGO details page */}
            <Route
              path={`${MENU_ROUTES_HREF.organizations}/:id`}
              element={<Organization />}
            ></Route>

            {/* Contact page */}
            <Route path={MENU_ROUTES_HREF.contact} element={<Contact />}></Route>

            {/* About page */}
            <Route path={MENU_ROUTES_HREF.about} element={<About />}></Route>
          </Route>

          {/* Wild Card */}
          <Route path="*" element={<Navigate to={'/'}></Navigate>}></Route>
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  );
};

export default Router;
