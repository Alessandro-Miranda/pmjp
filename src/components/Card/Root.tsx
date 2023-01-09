import React from 'react';

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  /**
   * React children that will be displayed
   */
  children: React.ReactNode;
  /**
   * Optional data used only by tests. Default value is "card-root"
   */
  'data-testid'?: string;
}

function Root({ children, ...props }: Props) {
  return React.createElement('article', { ...props }, children);
}

Root.defaultProps = { 'data-testid': 'card-root' };

export default Root;
