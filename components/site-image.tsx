import Image, { type ImageProps } from 'next/image';

// Next links honour basePath automatically; local image URLs need it explicitly.
export function SiteImage({ src, alt, ...props }: ImageProps) {
  const path = typeof src === 'string' && src.startsWith('/')
    ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`
    : src;
  return <Image {...props} src={path} alt={alt} />;
}
