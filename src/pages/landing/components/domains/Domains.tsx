import React from 'react';
import Domain from './Domain';

export enum IconTypes {
  USERS = 'users',
}

export interface IDomain {
  icon: IconTypes;
  name: string;
}

interface Domains {
  title: string;
  domains: IDomain[];
}

const Domains = ({ title, domains }: Domains) => {
  return (
    <div className="sm:px-30 sm:py-20 lg:px-40 lg:py-24 xl:px-60 xl:py-32 px-12 py-12">
      <p className="font-titilliumBold sm:text-3xl lg:text-4xl text-2xl pb-8">{title}</p>
      <div className="grid sm:gap-10 lg:gap-12 xl:gap-16 gap-8 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {domains.map((domain, index) => (
          <Domain name={domain.name} icon={domain.icon} key={index}></Domain>
        ))}
      </div>
    </div>
  );
};

export default Domains;
