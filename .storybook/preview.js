import * as NextImage from 'next/image';
import '../src/sass/main.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      width={100}
      height={100}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    />
  ),
});