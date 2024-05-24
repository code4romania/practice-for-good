import React from 'react';
import stars from '../../../../assets/icons/stars.svg';

interface DomainProps {
  name: string;
  skip?: boolean;
}

const Domain = ({ name, skip }: DomainProps) => {
  return (
    <a
      aria-label={name}
      href={skip ? '/practice-programs' : `/practice-programs?group=${encodeURIComponent(name)}`}
      className="text-black"
    >
      <div className="flex gap-1">
        <img width={24} height={24} alt="domain image" src={stars}></img>
        <p className="font-titilliumBold md:text-xl lg:text-2xl text-md text-left hover:text-yellow">
          {name}
        </p>
      </div>
    </a>
  );
};

export default Domain;
