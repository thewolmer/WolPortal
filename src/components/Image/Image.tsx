'use client';

import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';

import { blurDataURL, defaultFallbackImage } from './FallbackImage';

type Props = ImageProps & { alt: string; fallbackSrc?: string };
export const Image = ({ src, fallbackSrc, className, ...rest }: Props) => {
  const [imgFail, setImgFail] = useState(false);
  const [oldSrc, setOldSrc] = useState(src);
  if (oldSrc !== src) {
    setImgFail(false);
    setOldSrc(src);
  }
  if (!fallbackSrc && imgFail) {
    return <NextImage {...rest} src={defaultFallbackImage} />;
  }
  return (
    <NextImage
      {...rest}
      src={imgFail ? (fallbackSrc ? fallbackSrc : defaultFallbackImage) : src}
      className={className}
      placeholder="blur"
      blurDataURL={blurDataURL}
      onError={() => {
        setImgFail(true);
      }}
    />
  );
};
