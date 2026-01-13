import React, { ReactNode } from 'react';
import './Codeline.scss';

interface CodelineProps {
  children: ReactNode;
}

function Codeline({ children }: CodelineProps) {
  return <div className="codeline">{children}</div>;
}

export default Codeline;
