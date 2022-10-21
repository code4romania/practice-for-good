import React from 'react';
import ProgramsList from './components/ProgramsList';

const Programs = () => {
  return (
    <ProgramsList
      programs={[
        {
          id: 1,
          image: '',
          organization: { name: 'Organizatia ONG', id: 1 },
          title: 'Ttilu scurt de program de practica',
          location: 'Bucuresti',
          startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
          endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
          duration: 'min 30 ore',
        },
        {
          id: 2,
          image: '',
          organization: { name: 'Organizatia ONG', id: 1 },
          title: 'Ttilu scurt de program de practica',
          location: 'Bucuresti',
          startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
          endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
          duration: 'min 30 ore',
        },
        {
          id: 3,
          image: '',
          organization: { name: 'Organizatia ONG', id: 1 },
          title: 'Ttilu scurt de program de practica',
          location: 'Bucuresti',
          startDate: 'Fri, 14 Oct 2022 07:53:32 GMT',
          endDate: 'Fri, 21 Oct 2022 07:53:32 GMT',
          duration: 'min 30 ore',
          deadline: 'Fri, 21 Oct 2022 07:53:32 GMT',
        },
      ]}
      total={1220}
    ></ProgramsList>
  );
};

export default Programs;
