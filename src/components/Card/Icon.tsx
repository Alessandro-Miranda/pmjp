import Image, { ImageProps } from 'next/image';
import React from 'react';

function Icon({ ...props }: ImageProps) {
  return React.createElement(Image, { ...props, 'aria-hidden': true });
}

export default Icon;
