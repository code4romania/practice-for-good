import React from 'react';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import Counter from './components/counter/Counter';

const Landing = () => {
  return (
    <section className="w-full">
      <div className="bg-yellow w-full">
        <PracticeProgramsSearch />
      </div>
      <Counter
        counterItems={[
          { value: '3500+', title: 'Programe și activități adăugate pe platformă' },
          { value: '500+', title: 'ONG-uri din România active pe platformă' },
        ]}
      ></Counter>
    </section>
  );
};

export default Landing;
