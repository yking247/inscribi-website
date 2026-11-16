import Link from 'next/link';
import { SiteImage as Image } from '@/components/site-image';
import type { ReactNode } from 'react';
import { appStoreUrl } from '@/lib/site-metadata';

const links = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/support', label: 'Support' },
];

export function Mark() {
  return <Image src="/images/inscribi-icon.png" alt="" width={36} height={36} priority />;
}

export function SiteHeader() {
  return <header className="site-header"><Link className="brand brand-horizontal" href="/"><Image src="/images/inscribi-logo-horizontal-transparent.png" alt="Inscribi" width={172} height={64} priority /></Link><nav aria-label="Primary navigation">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}<a className="nav-cta" href={appStoreUrl} aria-label="Download Inscribi on the App Store">Get Inscribi</a></nav></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div><Link className="brand brand-horizontal footer-brand" href="/"><Image src="/images/inscribi-logo-horizontal-transparent.png" alt="Inscribi" width={140} height={52} /></Link><p>Your living notes library.</p><p>Available on iPhone. Android is still in testing.</p></div><nav aria-label="Footer navigation"><a href={appStoreUrl}>Download on the App Store</a><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/delete-account">Delete Account / Data</Link><Link href="/support">Support</Link></nav></footer>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter /></div>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div></section>;
}
