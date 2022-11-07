import { CheckIcon, LocationMarkerIcon, ShareIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { formatDate, formatDateMonthYear } from '../../common/helpers/Format.helper';
import { usePracticeProgram } from '../../services/practice-programs/PracticePrograms.queries';
import ShowMoreText from 'react-show-more-text';
import Card from '../../common/components/card/Card';
import ShapeWrapper from '../../common/components/shape-wrapper/ShapeWrapper';
import Loading from '../../common/components/loading/Loading';
import NoData from '../../common/components/no-data/NoData';
import copy from 'copy-to-clipboard';

interface PracticeProgramContentItemProps {
  label: string;
  value?: string;
}

const PracticeProgramContentItem = ({ label, value }: PracticeProgramContentItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="flex-1 font-titilliumSemiBold text-base">{label}</div>
      <div className="flex-1 text-base">{value || '-'}</div>
    </div>
  );
};

const PracticeProgramContentExpandableItem = ({
  label,
  value,
}: PracticeProgramContentItemProps) => {
  const { t } = useTranslation('common');
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="flex-1 font-titilliumSemiBold text-base">{label}</div>
      <div className="flex-1 text-base">
        <ShowMoreText
          /* Default options */
          lines={2}
          more={t('show_more')}
          less={t('show_less')}
          anchorClass="show-more-text"
          expanded={false}
          width={0}
        >
          {value || '-'}
        </ShowMoreText>
      </div>
    </div>
  );
};

const Program = () => {
  const { id } = useParams();
  const [sharedUrl, setSharedUrl] = useState<string>();

  const { data: program, error, isLoading } = usePracticeProgram(id as string);

  const { t } = useTranslation(['practice_programs', 'common']);

  const calculatePeriod = () => {
    if (!program?.startDate) {
      return;
    }

    if (!program?.endDate) {
      const startDate = formatDateMonthYear(program?.startDate);
      return `${t('details.period_starting_with')} ${startDate}`;
    } else {
      const endDate = program?.endDate
        ? formatDateMonthYear(program?.endDate)
        : t('details.deadline_unlimited');
      const startDate = formatDateMonthYear(program?.startDate);
      return `${startDate} - ${endDate}`;
    }
  };

  const formatDomains = () => {
    return program?.domains.map((domain: { id: number; name: string }) => domain.name).join(', ');
  };

  const formatFaculties = () => {
    return program?.faculties
      .map((faculty: { id: number; name: string }) => faculty.name)
      .join(', ');
  };

  const formatSkills = () => {
    return program?.skills.map((skill: { id: number; name: string }) => skill.name).join(', ');
  };

  const shareUrl = () => {
    setSharedUrl(window.location.href);
    copy(window.location.href);
  };

  if (isLoading) {
    return (
      <ShapeWrapper>
        <Loading />
      </ShapeWrapper>
    );
  }

  if (error) {
    return (
      <ShapeWrapper>
        <NoData>{t('details.errors.get')}</NoData>
      </ShapeWrapper>
    );
  }

  return (
    <ShapeWrapper>
      <section className="py-4 px-[.5rem] sm:py-5 sm:px-[4rem] lg:py-10 lg:px-[9rem]">
        <Card>
          <section className="divide-y divide-gray-100">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col gap-2">
                <h5 className="font-titilliumBold text-base text-purple">
                  {program?.organizationName}
                </h5>
                <h3 className="font-titilliumBold text-2xl">{program?.title}</h3>
                <p className="flex font-titilliumSemiBold text-base items-center gap-1 pb-11">
                  <LocationMarkerIcon className="h-4 w-4" />
                  <span>{program?.location.name}</span>
                </p>
              </div>
              <div className="ml-auto sm:flex sm:flex-col justify-center sm:h-full h-fit items-end gap-y-4 hidden">
                <a target="_blank" href={program?.link} rel="noreferrer">
                  <button
                    type="button"
                    className="font-titilliumSemiBold yellow-button text-center h-fit lg:w-48 w-32 lg:text-base text-xs"
                  >
                    {`${t('details.actions.apply')}`}
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col py-8 xl:flex-row">
              <div className="flex-1 flex flex-col gap-4 pb-4">
                <PracticeProgramContentItem
                  label={t('details.deadline')}
                  value={
                    program?.endDate
                      ? formatDate(program?.endDate)
                      : t('details.deadline_unlimited')
                  }
                />
                <PracticeProgramContentItem label={t('details.period')} value={calculatePeriod()} />
                <PracticeProgramContentItem
                  label={t('details.working_hours')}
                  value={`${program?.minWorkingHours} - ${program?.maxWorkingHours}`}
                />
                <PracticeProgramContentExpandableItem
                  label={t('details.faculties')}
                  value={formatFaculties()}
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <PracticeProgramContentItem label={t('details.domains')} value={formatDomains()} />
                <PracticeProgramContentItem label={t('details.skills')} value={formatSkills()} />
              </div>
            </div>
            <div className="py-8">
              <p>{program?.description}</p>
            </div>
            <div className="ml-auto flex flex-col justify-center h-fit items-center gap-y-4 sm:hidden py-8 px-8">
              <a target="_blank" className="w-full" href={program?.link} rel="noreferrer">
                <button
                  type="button"
                  className="font-titilliumSemiBold yellow-button text-center h-fit w-full lg:text-base text-xs"
                >
                  {`${t('details.actions.apply')}`}
                </button>
              </a>
            </div>

            <div className="py-6 flex flex-row justify-between items-center">
              <p className="text-base text-gray-400">
                {formatDateMonthYear(program?.createdOn || '')}
              </p>
              {sharedUrl ? (
                <div className="text-base flex flex-row items-center">
                  <CheckIcon className="w-5 h-5 text-green" />
                  <span className="text-gray-900 ml-1">{t('shared', { ns: 'common' })}</span>
                </div>
              ) : (
                <div className="text-base flex flex-row items-center" onClick={shareUrl}>
                  <ShareIcon className="w-5 h-5" />
                  <span className="text-gray-900 ml-1">{t('share', { ns: 'common' })}</span>
                </div>
              )}
            </div>
          </section>
        </Card>
      </section>
    </ShapeWrapper>
  );
};

export default Program;
