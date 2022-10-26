import React from 'react';
import { useTranslation } from 'react-i18next';
import { PracticeProgram } from '../../../common/interfaces/PracticeProgram.interface';
import ProgramItem from './ProgramItem';

interface ProgramsListProps {
  programs: PracticeProgram[];
  total: number;
}

const ProgramsList = ({ programs, total }: ProgramsListProps) => {
  const { t } = useTranslation('practice-programs');
  return (
    <div className="flex flex-col w-full lg:px-60 px-10 lg:py-20 py-10">
      <p className="title pb-8 text-center">{`${total} ${
        total > 1 ? t('many-programs-title') : t('one-program-title')
      }`}</p>
      <div className="flex flex-col w-full gap-y-10">
        {programs.map((program: PracticeProgram, index) => (
          <ProgramItem key={index} program={program}></ProgramItem>
        ))}
      </div>
    </div>
  );
};

export default ProgramsList;
