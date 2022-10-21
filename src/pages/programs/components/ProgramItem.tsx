import { CalendarIcon, ClockIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import React from 'react';
import Card from '../../../common/components/card/Card';
import i18n from '../../../common/configs/i18n';
import { formatDate, formatDateYear } from '../../../common/helpers/format.helper';
import { IProgram } from './ProgramsList';

const ProgramItem = ({ program }: { program: IProgram }) => {
  return (
    <Card>
      <div className="flex sm:flex-row flex-col w-full lg:min-h-32 min-h-[6rem] items-center gap-x-8 gap-y-5 h-full">
        <div className="aspect-square lg:w-32 sm:w-24 w-full lg:min-w-[8rem] sm:min-w-[6rem] bg-gray-100 sm:max-h-full max-h-[8rem]">
          {program.image && <img className="w-full h-full bg-cover" src={program.image}></img>}
        </div>
        <div className="flex flex-col sm:h-full gap-y-4 flex-wrap">
          <a className="sm:mb-auto max-w-fit" href={`/organization/${program.organization.id}`}>
            {program.organization.name}
          </a>
          <p className="font-titilliumBold sm:text-xl lg:text-3xl text-lg">{program.title}</p>
          <div className="flex sm:flex-row flex-wrap gap-x-8 gap-y-2 sm:mt-auto">
            <div className="flex flex-row items-center gap-x-1">
              <LocationMarkerIcon className="w-4"></LocationMarkerIcon>
              <p className="sm:text-sm lg:text-base text-xs">{program.location}</p>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <CalendarIcon className="w-4"></CalendarIcon>
              <p className="sm:text-sm lg:text-base text-xs">
                {formatDate(program.startDate)} - {formatDate(program.endDate)}
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-1">
              <ClockIcon className="w-4"></ClockIcon>
              <p className="sm:text-sm lg:text-base text-xs">{program.duration}</p>
            </div>
          </div>
        </div>
        <div className="ml-auto flex flex-col justify-center sm:h-full h-fit items-end">
          <button
            type="button"
            className="font-titilliumSemiBold yellow-long-button text-center h-fit lg:w-48 w-32 lg:text-base text-xs"
            onClick={() => console.log('Not yet implemented')}
          >
            {`${i18n.t('practice-programs:cta-label')}`}
          </button>
          {program.deadline && (
            <p className="mt-auto text-right sm:text-sm lg:text-base text-xs">
              {`${i18n.t('practice-programs:deadline')} ${formatDateYear(program.deadline)}`}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProgramItem;
