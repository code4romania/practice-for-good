import React from 'react';
import { ICounterItem } from './Counter';

const CounterItem = ({ value, title }: ICounterItem) => {
  return (
    <div className="flex flex-col items-center max-w-xs text-center gap-y-4">
      <p className="font-titilliumSemiBold sm:text-2xl lg:text-7xl text-lg">{value}</p>
      <p className="sm:text-xl text-sm">{title}</p>
    </div>
  );
};

export default CounterItem;
