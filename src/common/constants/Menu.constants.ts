import i18n from '../configs/i18n';
import { IMenuURL } from '../interfaces/Menu.interface';

export const MENU_ROUTES_HREF = {
  organizations: 'organizations',
  practice_programs: 'practice-programs',
  about: 'about',
  terms: 'terms',
  policy: 'policy',
  contact: 'contact',
  practice_program: 'practice-program',
};

export const MENU_ROUTES: IMenuURL[] = [
  { id: 0, name: i18n.t('menu:home'), href: '/' },
  { id: 1, name: i18n.t('menu:about'), href: `/${MENU_ROUTES_HREF.about}` },
  { id: 3, name: i18n.t('menu:practice_programs'), href: `/${MENU_ROUTES_HREF.practice_programs}` },
  { id: 4, name: i18n.t('menu:organizations'), href: `/${MENU_ROUTES_HREF.organizations}` },
  { id: 5, name: i18n.t('menu:contact'), href: `/${MENU_ROUTES_HREF.contact}` },
];
