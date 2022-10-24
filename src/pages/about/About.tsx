import React from 'react';
import p4gLogo from '../../assets/images/p4g-big-logo.svg';
import { useTranslation } from 'react-i18next';
import Description from '../../common/components/description/Description';
import ongHubLogo from '../../assets/images/onghub-logo.svg';

const About = () => {
  const { t } = useTranslation('about');
  return (
    <div className="mx-10 max-w-screen-xl xl:mx-auto">
      <div className="sm:my-20 my-10 grid md:grid-cols-2 grid-cols-1 lg:gap-x-32 gap-x-12 lg:gap-y-10 gap-y-5">
        <div className="md:order-1 order-2">
          <p className="title sm:mb-10 mb-5 text-center xl:text-left">{t('practice_for_good')}</p>
          <p className="body w-full">{t('description_p4g_1')}</p>
        </div>
        <img
          src={p4gLogo}
          alt="Practice for Good - logo"
          className="mx-auto md:order-2 order-1 md:h-auto h-16"
        />
        <p className="order-3 body w-full">{t('description_p4g_2')}</p>
        <p className="order-4 body w-full">{t('description_p4g_3')}</p>
      </div>
      <div className="container mx-auto">
        <hr className="border-solid border-gray-400 border-1" />
      </div>
      <Description
        title={t('onghub')}
        content={t('description_onghub')}
        cta={{ label: t('create_account'), link: 'onghub-dev.wearetribus.com/new' }}
        image={ongHubLogo}
      ></Description>
    </div>
  );
};

export default About;
