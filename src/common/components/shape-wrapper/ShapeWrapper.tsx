import React from 'react';

interface ShapeWrapperProps {
  children: React.ReactNode;
}

const ShapeWrapper = ({ children }: ShapeWrapperProps) => {
  return (
    <div className="w-full h-fit bg-shape bg-repeat sm:bg-auto bg-contain">
      <div></div>
      {children}
    </div>
  );
};

export default ShapeWrapper;
