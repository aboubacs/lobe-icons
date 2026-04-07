'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 100 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M7.2 5.4L12 18.6h-2.8L8 15H2.8L1.6 18.6H-1.2L3.6 5.4h3.6zM5.4 8.1L3.6 13h3.6L5.4 8.1zM16.8 5.4h5.6c3.2 0 5.2 1.8 5.2 4.4 0 2.6-2 4.4-5.2 4.4h-2.8v4.4h-2.8V5.4zm2.8 2.2v4.4h2.6c1.6 0 2.6-.8 2.6-2.2s-1-2.2-2.6-2.2h-2.6zM32 5.4h2.8v13.2H32V5.4z" />
      <path d="M48 5.4v13.2h-2.8v-5.4h-5.6v5.4h-2.8V5.4h2.8v5.4h5.6V5.4H48zM58.4 18.6h-2.8V14c0-1.2-.6-1.8-1.6-1.8s-1.8.8-1.8 2v4.4h-2.8V9.6h2.6v1.2c.6-.8 1.6-1.4 2.8-1.4 2 0 3.6 1.4 3.6 3.8v5.4zM68.4 18.6h-2.6v-1.2c-.6.8-1.6 1.4-2.8 1.4-2 0-3.6-1.6-3.6-4.8 0-3 1.6-4.6 3.6-4.6 1.2 0 2 .4 2.6 1.2V5.4h2.8v13.2zM63.6 11.4c-1.2 0-2 1-2 2.6 0 1.8.8 2.8 2 2.8s2-1 2-2.8c0-1.6-.8-2.6-2-2.6z" />
      <path d="M78.8 5.4L83.6 18.6h-2.8L79.6 15h-5.2l-1.2 3.6h-2.8L75.2 5.4h3.6zM77 8.1L75.2 13h3.6L77 8.1zM88 5.4h2.8v13.2H88V5.4z" />
    </svg>
  );
});

export default Icon;
