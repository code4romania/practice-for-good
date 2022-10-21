import React from 'react';
import { IOng } from './OngList';

const Ong = ({ ong }: { ong: IOng }) => {
  return (
    <div className="w-8/12 bg-white shadow-card rounded-lg p-8">
      <div className="flex flex-col">
        <div className="aspect-square lg:w-32 sm:w-24 w-full lg:min-w-[8rem] sm:min-w-[6rem] bg-gray-100 sm:max-h-full max-h-[8rem]">
          {ong.image && <img src={ong.image}></img>}
        </div>
        <div>
          <p className="text-xl">{ong.name}</p>
          <p className="w-8/12">{ong.shortDescription}</p>
        </div>
        <div>
          <button className="yellow-long-button" onClick={() => console.log('Not yet implemented')}>
            Vezi mai mult
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ong;
