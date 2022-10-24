import React from 'react';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import { LANDING_COUNTER_ITEMS } from '../../common/constants/nomenclature.constants';
import Counter from './components/counter/Counter';

const Landing = () => {
  return (
    <section className="w-full">
      <div className="bg-yellow w-full">
        <PracticeProgramsSearch />
      </div>
      <Counter counterItems={LANDING_COUNTER_ITEMS}></Counter>
    </section>
  );
};

export default Landing;
