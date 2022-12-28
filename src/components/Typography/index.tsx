import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

type Variants = {
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  h4: 'h4';
  h5: 'h5';
  h6: 'h6';
  p: 'p';
  span: 'span';
  default: 'p';
};

const VARIANTS_MAP: Variants = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  default: 'p',
};

type Props = {
  /**
   * Text content or another **inline-element** to be presented into text tag
   */
  children: React.ReactNode;
  /**
   * Optional styles to change text style default, it should be a space-separated string.
   * Text style default is defined into `_typography.scss` file.
   */
  className?: string;
  /**
   * Optional attribute that can defined to make tests find this component easily.
   */
  testid?: string;
  /**
   * Text variant. The default variant to display is a paragraph tag.
   */
  variant?: keyof Variants;
};

type TextProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>,
HTMLHeadingElement | HTMLParagraphElement>;

function Typography({
  children,
  className,
  variant,
  testid,
  ...props
}: Props & TextProps) {
  return React.createElement(
    VARIANTS_MAP[variant as keyof Variants],
    {
      className,
      'data-testid': testid,
      ...props,
    },
    children,
  );
}

Typography.defaultProps = {
  variant: 'default',
  className: '',
  testid: 'typography',
};

export default Typography;
