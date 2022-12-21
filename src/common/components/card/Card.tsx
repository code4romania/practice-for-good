import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="w-full h-fit bg-white shadow-card rounded-3xl p-8">{children}</div>;
};

export default Card;
