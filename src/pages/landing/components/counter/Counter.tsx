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
    <div className="bg-yellow w-full h-56 flex flex-row items-center justify-center gap-x-48">
      {counterItems.map((counterItem, index) => (
        <CounterItem value={counterItem.value} title={counterItem.title} key={index}></CounterItem>
      ))}
    </div>
  );
};

export default Counter;
