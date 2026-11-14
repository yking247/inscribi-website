import Link from 'next/link';
import { SiteImage as Image } from '@/components/site-image';
import type { SVGProps } from 'react';
import { SiteShell } from '@/components/site-shell';
import { ScrollReveal } from '@/components/scroll-reveal';

type FeatureIconName = 'edit' | 'diamond' | 'book' | 'image' | 'memory' | 'moon' | 'people' | 'search';

const features: { title: string; copy: string; icon: FeatureIconName; tone: string }[] = [
  { title: 'Note writing', copy: 'Create sermon, Bible study and general notes in a calmer writing space.', icon: 'edit', tone: 'sky' },
  { title: 'Gems', copy: 'Keep the lines and insights worth returning to.', icon: 'diamond', tone: 'gold' },
  { title: 'Bible Lookup', copy: 'Connect passages to your notes while you write.', icon: 'book', tone: 'paper' },
  { title: 'Cover customisation', copy: 'Use colour, an Inscribi cover, or a photo you own.', icon: 'image', tone: 'sea' },
  { title: 'AI Memory', copy: 'Rediscover meaningful threads from your own library.', icon: 'memory', tone: 'navy' },
  { title: 'Dark Mode', copy: 'A considered evening space for quiet reflection.', icon: 'moon', tone: 'night' },
  { title: 'Shared notes', copy: 'Write together for selected studies and ministry moments.', icon: 'people', tone: 'cream' },
  { title: 'Library search', copy: 'Find notes, Gems, Scripture and topics when you need them.', icon: 'search', tone: 'mist' },
];

function FeatureIcon({ name }: { name: FeatureIconName }) {
  const props: SVGProps<SVGSVGElement> = { 'aria-hidden': true, focusable: false, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'edit': return <svg {...props}><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/><path d="m14.5 5.5 3 3"/></svg>;
    case 'diamond': return <svg {...props}><path d="M6 3h12l4 6-10 12L2 9l4-6Z"/><path d="M2 9h20M9 3l-2 6m8-6 2 6m-7 0 2 12"/></svg>;
    case 'book': return <svg {...props}><path d="M12 7v14"/><path d="M12 7c-2.2-2-5.2-2.5-9-1.5v14c3.8-1 6.8-.5 9 1.5 2.2-2 5.2-2.5 9-1.5v-14c-3.8-1-6.8-.5-9 1.5Z"/></svg>;
    case 'image': return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>;
    case 'memory': return <svg {...props}><path d="M6 4h12v17l-6-4-6 4V4Z"/><path d="m12 7 .7 1.4 1.5.2-1.1 1.1.3 1.5-1.4-.7-1.4.7.3-1.5-1.1-1.1 1.5-.2L12 7Z"/></svg>;
    case 'moon': return <svg {...props}><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"/></svg>;
    case 'people': return <svg {...props}><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1H3Z"/><path d="M16 5.3a3 3 0 0 1 0 5.4M18 14a5 5 0 0 1 3 4.6V20h-3"/></svg>;
    case 'search': return <svg {...props}><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>;
  }
}

export default function HomePage() {
  return <SiteShell>
    <ScrollReveal className="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">A QUIET PLACE FOR WHAT MATTERS</p>
        <div className="hero-brand-lockup"><h1>Inscribi</h1></div>
        <p className="hero-subtitle">Your living notes library.</p>
        <p className="hero-body">Capture the moment. Keep sermons, Bible studies, Gems and reflections beautifully organised — and rediscover what matters later.</p>
        <div className="actions"><a className="button primary" href="mailto:support@inscribi.app?subject=Inscribi%20private%20beta">Join the beta</a><Link className="text-link" href="/features">Explore features <span aria-hidden>›</span></Link></div>
      </div>
      <div className="hero-panel app-home-panel"><Image src="/images/home-in-use.png" alt="Inscribi demo Home screen shown on a phone at a writing desk" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
    </ScrollReveal>

    <ScrollReveal className="section feature-section" aria-label="Inscribi features">
      <div className="section-heading"><div><p className="eyebrow">BUILT FOR REFLECTION</p><h2>A home for what matters.</h2></div><p>Write, keep and return to the notes, Scripture and insights you do not want to lose.</p></div>
      <div className="feature-grid">{features.map((feature, index) => <ScrollReveal as="article" delay={index * 55} className={`feature-card feature-card-${feature.tone}`} key={feature.title}><div className="feature-icon"><FeatureIcon name={feature.icon} /></div><h3>{feature.title}</h3><p>{feature.copy}</p></ScrollReveal>)}</div>
    </ScrollReveal>

    <ScrollReveal className="closing"><div><p className="eyebrow">A LIVING LIBRARY</p><h2>Make space for what you are learning.</h2><p>Inscribi is being shaped carefully in private beta, with a focus on useful writing, not more noise.</p><Link className="text-link" href="/support">Stay in touch <span aria-hidden>›</span></Link></div><div className="closing-glimpse"><Image src="/images/home-in-use.png" alt="Privacy-safe Inscribi demo Home screen" fill sizes="(max-width: 800px) 100vw, 360px" /></div></ScrollReveal>
  </SiteShell>;
}
