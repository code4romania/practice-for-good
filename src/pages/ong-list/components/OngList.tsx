import React from 'react';
import Ong from './Ong';

interface OngsProps {
  ongs: IOng[];
  total: number;
}

export interface IOng {
  id: number;
  image: string;
  name: string;
  shortDescription: string;
}

const OngList = ({ ongs, total }: OngsProps) => {
  // return (
  //   <div className="flex flex-row w-1/2 lg:px-60 px-10 lg:py-20 py-10">
  //     <p className="font-titilliumBold sm:text-3xl lg:text-4xl text-2xl pb-8 text-center">{`${total} ${
  //       total > 1 ? 'Many' : 'One'
  //     }`}</p>
  //     <div className="flex flex-row w-1/2 gap-y-10">
  //       {ongs.map((ong: IOng, index) => (
  //         <Ong key={index} ong={ong}></Ong>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="mx-auto ">
      <p className="text-3xl">{`${total} ${total > 1 ? 'de ONG-uri' : 'ONG'}`}</p>
      <div className="grid text-left grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6 mx-10">
        {ongs.map((ong: IOng, index) => (
          <Ong key={index} ong={ong}></Ong>
        ))}
      </div>
    </div>
  );
};

export default OngList;
