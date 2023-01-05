import React from 'react';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid';
import { NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import i18n from '../../configs/i18n';
import { MENU_ROUTES_HREF } from '../../constants/Menu.constants';
import { useBreadcrumbsState } from '../../../store/Selectors';

const BreadcrumbItem = ({ children }: { children: string }) => (
  <span className="max-w-[5rem] sm:max-w-[15rem] lg:max-w-xs truncate">{children}</span>
);

const DynamicPracticeProgram = () => {
  const { programName } = useBreadcrumbsState();
  return <BreadcrumbItem>{programName || ''}</BreadcrumbItem>;
};

const DynamicOrganization = () => {
  const { organizationName } = useBreadcrumbsState();
  return <BreadcrumbItem>{organizationName || ''}</BreadcrumbItem>;
};

const HomeBreadcrumb = () => {
  return (
    <span>
      <HomeIcon className="w-5 h-5" />
    </span>
  );
};

const routes = [
  { path: '', breadcrumb: HomeBreadcrumb },
  { path: `/${MENU_ROUTES_HREF.practice_programs}`, breadcrumb: i18n.t('menu:practice_programs') },
  { path: `/${MENU_ROUTES_HREF.practice_programs}/:programId`, breadcrumb: DynamicPracticeProgram },
  { path: `/${MENU_ROUTES_HREF.organizations}`, breadcrumb: i18n.t('menu:organizations') },
  { path: `/${MENU_ROUTES_HREF.organizations}/:organizationId`, breadcrumb: DynamicOrganization },
  {
    path: `/${MENU_ROUTES_HREF.organizations}/:organizationId/${MENU_ROUTES_HREF.practice_program}/:programId`,
    breadcrumb: DynamicPracticeProgram,
  },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, {
    excludePaths: [
      `/${MENU_ROUTES_HREF.organizations}/:organizationId/${MENU_ROUTES_HREF.practice_program}`,
    ],
  });
  const location = useLocation();

  // Breadcrums must not be displayed on certain pages.
  if (
    location.pathname === '/' ||
    location.pathname == `/${MENU_ROUTES_HREF.organizations}` ||
    location.pathname == `/${MENU_ROUTES_HREF.practice_programs}` ||
    location.pathname == `/${MENU_ROUTES_HREF.about}` ||
    location.pathname == `/${MENU_ROUTES_HREF.contact}`
  ) {
    return <></>;
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        return (
          <span key={match.pathname}>
            <NavLink
              className="text-gray-1000 flex gap-2 items-center hover:underline"
              to={match.pathname}
            >
              {breadcrumb}{' '}
              {index < breadcrumbs.length - 1 && <ChevronRightIcon className="w-4 h-4" />}
            </NavLink>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
