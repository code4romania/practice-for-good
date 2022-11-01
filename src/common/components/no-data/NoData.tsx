import React from 'react';

interface NoDataProps {
  children: string;
}

const NoData = ({ children }: NoDataProps) => (
  <div className="p-10 flex items-center justify-center">{children}</div>
);

export default NoData;
