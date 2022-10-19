import React from 'react'
import PracticeProgramsSearch from '../../common/components/practice-programs-search/PracticeProgramsSearch';

const Landing = () => {
  return (
    <div className='bg-yellow w-full'>
      <PracticeProgramsSearch showFilters={true} />
    </div>)
}

export default Landing;