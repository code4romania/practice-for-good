import React from 'react';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { LANDING_DOMAINS } from '../../common/constants/nomenclature.constants';
import Domains from './components/domains/Domains';
import Counter from './components/counter/Counter';
import Description from '../../common/components/description/Description';
import { useTranslation } from 'react-i18next';
import p4g from '../../assets/images/p4g.svg';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const { t } = useTranslation('landing');
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <div className="bg-yellow w-full">
        <PracticeProgramsSearch
          showFilters={true}
          onSearchCallback={() => navigate('/practice-programs')}
        />
      </div>
      <div className="max-w-screen-xl mx-auto px-10">
        <Description
          title={t('about.title')}
          content={t('about.paragraph_1')}
          cta={{ label: t('about.action'), link: '' }}
          image={p4g}
          isTextRight={true}
        ></Description>
      </div>
      <Counter></Counter>
      <ShapeWrapper>
        {' '}
        <Domains domains={LANDING_DOMAINS}></Domains>
      </ShapeWrapper>
    </section>
  );
};

export default Landing;
