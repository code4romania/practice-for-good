import i18n from "../../../configs/i18n";

const translations = {
  name: {
    required: i18n.t('organization:create_config.name.required'),
    max: i18n.t('organization:create_config.name.max'),
    min: i18n.t('organization:create_config.name.min'),
    invalid: i18n.t('organization:create_config.name.invalid'),
    label: i18n.t('organization:create_config.name.label'),
  },
};

export const PracticeProgramsSearchConfig: Record<string, any> = {
  name: {
    key: 'name',
    rules: {
      maxLength: {
        value: 100,
        message: translations.name.max,
      },
      minLength: {
        value: 3,
        message: translations.name.min,
      },
      pattern: {
        // value: NAME_REGEX,
        message: translations.name.invalid,
      },
    },
    config: {
      type: 'text',
      label: translations.name.label,
      helperText: '',
      placeholder: 'Ana Maria Stoian',
    },
  },
  yearCreated: {
    key: 'yearCreated',
    rules: {
      required: {
        value: true,
        message: 'yearCreated',
      },
    },
    config: {
      type: 'text',
      label: 'yearCreated',
      collection: [
        { id: 1, year: 2019 },
        { id: 2, year: 2020 },
        { id: 3, year: 2022 },
      ],
      displayedAttribute: 'year',
      isMulti: true,
    },
  },
}