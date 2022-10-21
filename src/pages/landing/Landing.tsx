import React from 'react';
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import Domains, { IconTypes } from './components/domains/Domains';

const Landing = () => {
  return (
    <section className="w-full">
      <div className="bg-yellow w-full">
        <PracticeProgramsSearch />
      </div>
      <ShapeWrapper>
        {' '}
        <Domains
          title="Domenii"
          domains={[
            { name: 'Medical', icon: IconTypes.USERS },
            { name: 'Jurnalism', icon: IconTypes.USERS },
            { name: 'Educatie', icon: IconTypes.USERS },
            { name: 'Inginerie', icon: IconTypes.USERS },
            { name: 'Tech', icon: IconTypes.USERS },
            { name: 'Advocacy', icon: IconTypes.USERS },
          ]}
        ></Domains>
      </ShapeWrapper>
    </section>
  );
};

export default Landing;
