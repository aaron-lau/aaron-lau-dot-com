import React, { ReactNode } from 'react';
import './Defination.scss';

interface DefinationProps {
  children: ReactNode;
}

function Defination({ children }: DefinationProps) {
  return <div className="defination">{children}</div>;
}

export default Defination;
