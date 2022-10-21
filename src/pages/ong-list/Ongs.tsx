import React from 'react';
import OngList from './components/OngList';

const Ongs = () => {
  return (
    <OngList
      ongs={[
        {
          id: 1,
          image: '',
          name: 'Denumire Scurta ONG',
          shortDescription:
            'Short Description Short Description Short Description Short Description Short Description',
        },
        {
          id: 2,
          image: '',
          name: 'Denumire Scurta ONG',
          shortDescription:
            'Short Description Short Description Short Description Short Description Short Description',
        },
        {
          id: 3,
          image: '',
          name: 'Denumire Scurta ONG',
          shortDescription:
            'Short Description Short Description Short Description Short Description Short Description',
        },
        {
          id: 4,
          image: '',
          name: 'Denumire Scurta ONG',
          shortDescription:
            'Short Description Short Description Short Description Short Description Short Description',
        },
        {
          id: 5,
          image: '',
          name: 'Denumire Scurta ONG',
          shortDescription:
            'Short Description Short Description Short Description Short Description Short Description',
        },
        {
          id: 6,
          image: '',
          name: 'Denumire Scurta ONG',
          shortDescription:
            'Short Description Short Description Short Description Short Description Short Description',
        },
      ]}
      total={120}
    ></OngList>
  );
};

export default Ongs;
