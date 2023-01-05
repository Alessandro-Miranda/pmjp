import Image, { ImageProps } from 'next/image';
import React from 'react';

function Icon({ ...props }: ImageProps) {
  return React.createElement<ImageProps & { 'data-testid'?: string }>(
    Image,
    {
      ...props,
      'aria-hidden': true,
      'data-testid': 'card-icon',
    },
  );
}

export default Icon;
