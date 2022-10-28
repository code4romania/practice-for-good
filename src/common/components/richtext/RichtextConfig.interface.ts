/* eslint-disable @typescript-eslint/ban-types */

import { ChangeEventHandler } from 'react';
import { RawDraftContentState } from 'react-draft-wysiwyg';

export interface RichtextConfig {
  label?: string;
  name?: string;
  helperText?: string;
  error?: string | any;
  // onChange?: ChangeEventHandler<HTMLInputElement>;
  onChange?: (contentState: RawDraftContentState) => void;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  addOn?: Function;
  id?: string;
}
