import * as NextImage from 'next/image';
import * as NextLink from 'next/link';
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
      style={{ position: 'relative' }}
    />
  ),
});

const OriginalLink = NextLink.default;

Object.defineProperty(NextLink, "default", {
  configurable: true,
  value: (props) => (
    <OriginalLink
      {...props}
    >
      <a
        className={props.className}
        data-testid={props['data-testid']}
        aria-label={props['aria-label']}
      >
        {props.children}
      </a>
    </OriginalLink>
  )
})