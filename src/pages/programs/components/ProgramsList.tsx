import React from 'react';
import Card from '../../../common/components/card/Card';
import i18n from '../../../common/configs/i18n';
import ProgramItem from './ProgramItem';

interface ProgramsListProps {
  programs: IProgram[];
  total: number;
}

export interface IProgram {
  id: number;
  image: string;
  organization: {
    name: string;
    id: number;
  };
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  deadline?: string;
}

const ProgramsList = ({ programs, total }: ProgramsListProps) => {
  return (
    <div className="flex flex-col w-full lg:px-60 px-10 lg:py-20 py-10">
      <p className="font-titilliumBold sm:text-3xl lg:text-4xl text-2xl pb-8 text-center">{`${total} ${
        total > 1
          ? i18n.t('practice-programs:many-programs-title')
          : i18n.t('practice-programs:one-program-title')
      }`}</p>
      <div className="flex flex-col w-full gap-y-10">
        {programs.map((program: IProgram, index) => (
          <ProgramItem key={index} program={program}></ProgramItem>
        ))}
      </div>
    </div>
  );
};

export default ProgramsList;
