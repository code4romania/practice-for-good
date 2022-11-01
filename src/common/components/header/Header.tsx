import React from 'react';
import './Header.css';
import logo from './../../../assets/images/logo.svg';
import commitGlobalLogo from './../../../assets/images/commit-global-logo-black.svg';
import { MenuIcon } from '@heroicons/react/outline';
import { MENU_ROUTES } from '../../constants/Menu.constants';
import { useTranslation } from 'react-i18next';

const Header = ({ openSlidingMenu }: { openSlidingMenu?: any }) => {
  const { t } = useTranslation('header');
  return (
    <header className="bg-white max-h-">
      <nav aria-label="Top">
        <div className='flex items-center gap-4 w-full lg:px-32 sm:px-8 sm:py-2 px-2 bg-gray-50 h-12'>
          <img src={commitGlobalLogo} alt="Commit Global" className="sm:h-full h-6" />
          <span className='sm:text-base text-xs'>{t('commit_global_solution')}</span>
          <a className='text-blue font-bold hover:underline sm:text-base text-xs' href="https://www.commitglobal.org/en" target='_blank' rel="noreferrer">{t('learn_more')}</a>

        </div>
        <div className="w-full lg:px-32 sm:px-8 px-2 py-4 flex gap-4 justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Code 4 Romania - ONG Hub" className="sm:h-full sm:w-full h-10" />
          </div>
          <div className="flex gap-4">
            <div className="gap-6 hidden sm:flex">
              {MENU_ROUTES.map((route) => (
                <a className="text-black menu-title" key={route.id} href={route.href}>
                  {route.name}
                </a>
              ))}
            </div>
            <div className="flex sm:hidden items-center">
              <button
                className="flex items-center gap-4 hover:bg-green-tab py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                onClick={() => openSlidingMenu(true)}
              >
                <MenuIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
