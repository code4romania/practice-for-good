import React from 'react';
import { HomeIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import Card from '../../../common/components/card/Card';
import { Organization } from '../../../common/interfaces/Organization.interface';
import facebook_icon from '../../../assets/icons/facebook.svg';
import instagram_icon from '../../../assets/icons/instagram.svg';
import twitter_icon from '../../../assets/icons/twitter.svg';
import { openInNewTab } from '../../../common/helpers/Format.helper';

interface OrganizationProps {
  organization: Organization;
}

const OrganizationDetails = ({ organization }: OrganizationProps) => {
  const { t } = useTranslation('organizations');

  return (
    <Card>
      <div className="flex lg:flex-row flex-col gap-x-20 gap-y-10">
        <div
          style={{ backgroundImage: `url(${organization?.logo})` }}
          className={`aspect-square bg-contain bg-no-repeat bg-center lg:w-764 lg:h-64 sm:h-44 sm:w-44 w-full h-32 ${
            organization.logo ? 'bg-transparent' : 'bg-gray-100'
          }`}
        ></div>
        <div className="flex flex-col gap-y-5">
          <p className="subtitle">{organization.name}</p>
          <p className="article">{organization.shortDescription}</p>
          <p className="article">{organization.description}</p>
          <div className="flex sm:flex-row flex-col gap-x-2 body-text">
            <p className="text-purple font-titilliumSemiBold text-lg">
              {t('details.activity_domains')}
            </p>
            <p className="text-base">
              {organization.domains?.map((domain) => domain.name).join(', ')}
            </p>
          </div>
          <div className="flex sm:flex-row flex-col gap-x-10 gap-y-5 body-text">
            <div className="flex flex-col lg:gap-y-2 gap-y-1 flex-1">
              <p className="text-purple font-titilliumSemiBold text-lg">{t('details.contact')}</p>
              <div className="flex gap-x-2">
                <PhoneIcon className="w-4"></PhoneIcon>
                <p className="text-base">{organization.phone || '-'}</p>
              </div>
              <div className="flex gap-x-2">
                <MailIcon className="w-4"></MailIcon>
                <p className="text-base">{organization.email || '-'}</p>
              </div>
              <div className="flex gap-x-2">
                <HomeIcon className="w-4"></HomeIcon>
                <p className="text-base">
                  {[organization.city, organization.county].join(', ') || '-'}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:gap-y-2 gap-y-1 flex-1">
              <p className="text-purple font-titilliumSemiBold text-lg">
                {t('details.social_media')}
              </p>
              <div className="flex flex-row gap-x-5">
                {organization.facebook && (
                  <img
                    width={'24px'}
                    height={'24px'}
                    className="lg:w-6 w-4 hover:cursor-pointer"
                    alt="Facebook icon"
                    src={facebook_icon}
                    onClick={() => {
                      if (organization.facebook) openInNewTab(organization.facebook);
                    }}
                  ></img>
                )}
                {organization.instagram && (
                  <img
                    width={'24px'}
                    height={'24px'}
                    className="lg:w-6 w-4 hover:cursor-pointer"
                    alt="Instagram icon"
                    src={instagram_icon}
                    onClick={() => {
                      if (organization.instagram) openInNewTab(organization.instagram);
                    }}
                  ></img>
                )}
                {organization.twitter && (
                  <img
                    width={'24px'}
                    height={'24px'}
                    className="lg:w-6 w-4 hover:cursor-pointer"
                    alt="Twitter icon"
                    src={twitter_icon}
                    onClick={() => {
                      if (organization.twitter) openInNewTab(organization.twitter);
                    }}
                  ></img>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrganizationDetails;
