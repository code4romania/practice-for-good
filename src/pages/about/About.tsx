import React from 'react';
import p4gLogo from '../../assets/images/p4g-big-logo.svg';
import ongHubLogo from '../../assets/images/onghub-logo.svg';
import { openInNewTab } from '../../common/helpers/Format.helper';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <div className="mx-10 max-w-screen-xl lg:mx-10 xl:mx-auto">
      <section className="mt-10">
        <div className="font-titillium mb-10 grid xl:grid-cols-4">
          <img
            src={p4gLogo}
            alt="Practice for Good - logo"
            className="mx-auto xl:order-2 xl:col-span-2"
          />
          <div className="my-5 text-left text-center xl:text-left xl:order-1 xl:col-span-2">
            <p className="text-big mb-10 text-center xl:text-left">{t('practice-for-good')}</p>
            <p className="text-small mx-auto text-left lg:w-10/12 xl:mx-0 xl:w-10/12">
              {t('description-p4g-1')}
            </p>
          </div>
          <div className="my-5 xl:order-3 xl:col-span-2">
            <p className="text-small mx-auto text-left lg:w-10/12 xl:mx-0 xl:w-10/12">
              {t('description-p4g-2')}
            </p>
          </div>
          <div className="my-5 xl:order-4 xl:col-span-2">
            <p className="text-small mx-auto text-left lg:w-10/12 xl:mx-0 xl:w-10/12">
              {t('description-p4g-3')}
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <hr className="border-solid border-gray-400 border-1" />
      </div>
      <section className="grid mb-10 pb-10 xl:grid-cols-2">
        <img src={ongHubLogo} alt="ONGHub - logo" className="mx-auto pt-5 mt-10 xl:order-2" />
        <div className="font-titillium mt-10 text-center xl:text-left xl:order-1">
          <p className="text-big my-5 text-center xl:text-left">{t('onghub')}</p>
          <p className="text-small mx-auto text-left lg:w-10/12 xl:mx-0 xl:w-10/12">
            {t('description-onghub')}
          </p>
          <button
            onClick={() => {
              openInNewTab('onghub-dev.wearetribus.com/new');
            }}
            className="yellow-button mt-10"
          >
            {t('create-account')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
