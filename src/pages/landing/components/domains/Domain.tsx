import React from 'react';
import users from '../../../../assets/icons/users.svg';
import { IconTypes, IDomain } from './Domains';

const Domain = ({ name, icon }: IDomain) => {
  return (
    <div className="bg-gray-100 hover:bg-yellow aspect-square flex justify-center items-center flex-col gap-y-4">
      {icon === IconTypes.USERS ? (
        <img
          className="xl:max-w-[8rem] md:max-w-[3rem] xs:max-w-[3.5rem] max-w-[2.8rem]"
          src={users}
        ></img>
      ) : (
        ''
      )}
      <p className="font-titilliumBold sm:text-2xl lg:text-3xl text-xl">{name}</p>
    </div>
  );
};

export default Domain;
