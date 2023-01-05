import React from 'react';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children: React.ReactNode;
  'data-testid'?: string;
}

function Root({ children, ...props }: Props) {
  return React.createElement('article', { ...props }, children);
}

Root.defaultProps = { 'data-testid': null };

export default Root;
