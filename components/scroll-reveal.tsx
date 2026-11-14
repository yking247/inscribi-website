'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

type RevealElement = 'section' | 'article';

type ScrollRevealProps = {
  as?: RevealElement;
  children: ReactNode;
  className?: string;
  delay?: number;
  'aria-label'?: string;
};

export function ScrollReveal({ as: Element = 'section', children, className, delay = 0, ...props }: ScrollRevealProps) {
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = targetRef.current;
    if (reducedMotion || !target || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    document.documentElement.classList.add('scroll-reveal-enabled');
    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;
  return <Element ref={targetRef} data-scroll-reveal className={className} style={style} {...props}>{children}</Element>;
}
