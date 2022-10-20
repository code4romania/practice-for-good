import React from 'react';
import CounterItem from './CounterItem';

export interface ICounterItem {
  value: string;
  title: string;
}

interface CounterProps {
  counterItems: ICounterItem[];
}

const Counter = ({ counterItems }: CounterProps) => {
  return (
    <div className="bg-yellow w-full sm:h-56 h-72 flex sm:flex-row flex-col items-center justify-center lg:gap-x-48 gap-x-28 gap-y-10 px-16">
      {counterItems.map((counterItem, index) => (
        <CounterItem value={counterItem.value} title={counterItem.title} key={index}></CounterItem>
      ))}
    </div>
  );
};

export default Counter;
