import React from 'react';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import Domains from './components/domains/Domains';
import Counter from './components/counter/Counter';
import Description from '../../common/components/description/Description';
import { useTranslation } from 'react-i18next';
import p4g from '../../assets/images/p4g.svg';
import { useNavigate } from 'react-router-dom';
import { DONATE_URL } from '../../common/constants/ExternalURL.constants';

const Landing = () => {
  const { t } = useTranslation('landing');
  const navigate = useNavigate();

  const onGoToPrograms = (search: string) => {
    navigate({
      pathname: '/practice-programs',
      search,
    });
  };

  return (
    <section className="w-full">
      <PracticeProgramsSearch onSearchCallback={onGoToPrograms} />
      <Description
        title={t('about.title')}
        content={t('about.paragraph_1')}
        cta={{ label: t('about.support'), link: DONATE_URL }}
        image={p4g}
        isTextRight={true}
        className="wrapper"
      ></Description>
      <Counter />
      <Domains />
    </section>
  );
};

export default Landing;
