import React from 'react';
import { CalendarIcon, ClockIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import Card from '../../../common/components/card/Card';
import { formatDate, formatDateYear } from '../../../common/helpers/Format.helper';
import { IPracticeProgram } from '../../../common/interfaces/PracticeProgram.interface';

interface ProgramItemProps {
  program: IPracticeProgram;
  onNavigate: () => void;
}

const ProgramItem = ({ program, onNavigate }: ProgramItemProps) => {
  const { t } = useTranslation(['practice_programs', 'common']);
  return (
    <div className="py-5">
      <Card>
        <div className="w-full h-full lg:min-h-32 min-h-[6rem] flex flex-col sm:flex-row gap-x-8 gap-y-5">
          <div
            style={{ backgroundImage: `url(${program?.logo})` }}
            className={`aspect-square bg-contain bg-no-repeat bg-center lg:w-32 sm:w-24 w-full lg:min-w-[8rem] sm:min-w-[6rem] sm:max-h-full max-h-[6rem] ${
              program?.logo ? 'bg-transparent' : 'bg-gray-100'
            }`}
          ></div>
          <div className="flex-2 flex flex-col gap-y-3 flex-wrap w-full sm:py-2">
            <a
              className="sm:mb-auto max-w-fit sm:text-sm lg:text-base text-xs font-titilliumSemiBold"
              href={`/organizations/${program?.organizationId}`}
            >
              {program?.organizationName}
            </a>
            <p className="subtitle">{program.title}</p>
            <div className="flex sm:flex-row flex-wrap gap-x-8 gap-y-2 sm:mt-auto">
              <div className="flex flex-row items-center gap-x-1">
                <LocationMarkerIcon className="w-4"></LocationMarkerIcon>
                <p className="sm:text-sm lg:text-base text-xs">{program.location.name}</p>
              </div>
              <div className="flex flex-row items-center gap-x-1">
                <CalendarIcon className="w-4"></CalendarIcon>
                <p className="sm:text-sm lg:text-base text-xs">
                  {formatDate(program.startDate)} - {formatDate(program.endDate)}
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-1">
                <ClockIcon className="w-4"></ClockIcon>
                <p className="sm:text-sm lg:text-base text-xs">{`min. ${
                  program.minWorkingHours
                } ${t('hours', { ns: 'common' })}`}</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center sm:items-end gap-y-4 sm:gap-y-2">
            <button
              aria-label={t('action')}
              type="button"
              className="font-titilliumSemiBold yellow-button text-center text-xs h-fit w-full max-w-[24rem] md:w-48 lg:text-base"
              onClick={onNavigate}
            >
              {`${t('action')}`}
            </button>
            {program.deadline && (
              <p className="text-right sm:text-sm lg:text-base text-xs">
                {`${t('deadline')} ${formatDateYear(program.deadline)}`}
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProgramItem;
