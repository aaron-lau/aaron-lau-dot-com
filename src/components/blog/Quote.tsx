import React from 'react';
import './quote.scss';

interface QuoteProps {
  phase: string;
  cite?: string;
}

function Quote({ phase, cite }: QuoteProps) {
  return (
    <blockquote className="quote">
      {phase}
      {cite && <cite className="cite">{cite}</cite>}
    </blockquote>
  );
}

export default Quote;
