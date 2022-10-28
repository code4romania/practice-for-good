import React from 'react';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import { LANDING_DOMAINS } from '../../common/constants/nomenclature.constants';
import Domains from './components/domains/Domains';
import { LANDING_COUNTER_ITEMS } from '../../common/constants/nomenclature.constants';
import Counter from './components/counter/Counter';
import Description from '../../common/components/description/Description';
import { useTranslation } from 'react-i18next';
import p4g from '../../assets/images/p4g.svg';

const Landing = () => {
  const { t } = useTranslation('landing');

  return (
    <section className="w-full">
      <div className="bg-yellow w-full">
        <PracticeProgramsSearch showFilters={true} />
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
      <Counter counterItems={LANDING_COUNTER_ITEMS}></Counter>
      <ShapeWrapper>
        {' '}
        <Domains domains={LANDING_DOMAINS}></Domains>
      </ShapeWrapper>
    </section>
  );
};

export default Landing;
