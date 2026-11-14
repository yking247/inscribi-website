import type { ReactNode } from 'react';
import { PageIntro, SiteShell } from './site-shell';

export function LegalPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return <SiteShell><div className="page-main legal-page"><PageIntro eyebrow={eyebrow} title={title}><p>{intro}</p></PageIntro><article className="legal-card">{children}</article></div></SiteShell>;
}
