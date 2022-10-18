import i18n from '../../../common/configs/i18n';

const translations = {
  name: {
    required: i18n.t('contact:config.name.required'),
    max: i18n.t('contact:config.name.max'),
    min: i18n.t('contact:config.name.min'),
    invalid: i18n.t('contact:config.name.invalid'),
    label: i18n.t('contact:config.name.label'),
  },
  email: {
    required: i18n.t('contact:config.email.required'),
    max: i18n.t('contact:config.email.max'),
    min: i18n.t('contact:config.email.min'),
    invalid: i18n.t('contact:config.email.invalid'),
    label: i18n.t('contact:config.email.label'),
  },
  message: {
    required: i18n.t('contact:config.message.required'),
    max: i18n.t('contact:config.message.required'),
    min: i18n.t('contact:config.message.min'),
    label: i18n.t('contact:config.message.label'),
  },
};

export const ContactConfig: Record<string, any> = {
  name: {
    key: 'name',
    rules: {
      required: {
        value: true,
        message: translations.name.required,
      },
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
    },
  },
  email: {
    key: 'email',
    rules: {
      required: {
        value: true,
        message: translations.email.required,
      },
      maxLength: {
        value: 100,
        message: translations.email.max,
      },
      minLength: {
        value: 3,
        message: translations.email.min,
      },
      pattern: {
        // value: EMAIL_REGEX,
        message: translations.email.invalid,
      },
    },
    config: {
      type: 'text',
      label: translations.email.label,
      helperText: '',
    },
  },
  message: {
    key: 'message',
    rules: {
      required: {
        value: true,
        message: translations.message.required,
      },
      maxLength: {
        value: 250,
        message: translations.message.max,
      },
      minLength: {
        value: 50,
        message: translations.message.min,
      },
    },
    config: {
      type: 'text',
      label: translations.message.label,
      helperText: '',
    },
  },
};
