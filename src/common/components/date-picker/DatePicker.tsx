import React, { useEffect, useState } from 'react';
import { CalendarIcon } from '@heroicons/react/outline';
import { default as ReactDatePicker } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface DateRangePickerProps {
  defaultValue?: Date;
  onChange?: (range: any) => void;
}

const DatePicker = ({ defaultValue, onChange }: DateRangePickerProps) => {
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    if (defaultValue) {
      setDate(defaultValue);
    }
  }, []);

  useEffect(() => {
    if (date) {
      onChange && onChange(date);
    }
  }, [date]);

  return (
    <div className="relative w-full">
      <div className="mt-1 relative rounded-md">
        <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none z-10">
          <CalendarIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <ReactDatePicker
          className="block w-full p-4 border-gray-300 shadow-sm sm:text-base text-sm border focus:ring-indigo-500 focus:border-indigo-500"
          selectsRange={false}
          onChange={(update: Date) => {
            setDate(update);
          }}
          selected={date}
          isClearable={false}
          placeholderText="Selecteaza data inceput"
          dateFormat='dd.MM.yyyy'
        />
      </div>
    </div>
  );
};

export default DatePicker;
