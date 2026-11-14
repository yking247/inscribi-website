import Link from 'next/link';
import { SiteImage as Image } from '@/components/site-image';
import { pageMetadata } from '@/lib/site-metadata';
import { PageIntro, SiteShell } from '@/components/site-shell';

const featureGroups = [
  { title: 'Write with room to reflect', items: ['Sermon, Bible study and general notes', 'Personal covers and calm writing tools', 'Scripture references kept with each note'], image: '/images/cover-sermon-light.png' },
  { title: 'Keep a library that stays useful', items: ['Gems for insights worth returning to', 'Archive and Trash for gentle organisation', 'Search across your own writing'], image: '/images/gem-hero.png' },
  { title: 'Return to what matters', items: ['Memory resurfacing from your existing library', 'Bible lookup designed to support notes—not replace reading', 'Shared notes for selected ministry moments'], image: '/images/memory-hero.png' },
];

export const metadata = pageMetadata('Features', 'Writing, Gems, Scripture references and ways to return to your Inscribi library.', '/features/');

export default function FeaturesPage() {
  return <SiteShell><PageIntro eyebrow="INSCRIBI" title="A living library for your notes."><p>Every feature is designed to help you capture, keep and rediscover what is worth carrying forward.</p></PageIntro><section className="feature-groups">{featureGroups.map((group) => <article className="feature-group" key={group.title}><div><h2>{group.title}</h2><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="feature-group-preview"><Image src={group.image} alt="" width={360} height={240} /></div></article>)}</section><section className="actual-screen-strip"><div><p className="eyebrow">INSCRIBI BETA</p><h2>Designed around how you actually write, save and return.</h2><p>A small glimpse of the calm, personal library Inscribi is becoming.</p></div><div className="privacy-safe-glimpse"><Image src="/images/home-in-use.png" alt="Privacy-safe Inscribi demo Home screen" fill sizes="(max-width: 800px) 100vw, 460px" /></div></section><section className="callout"><p>Inscribi is in private beta. We are learning with real writers and refining the details thoughtfully.</p><Link className="text-link" href="/support">Talk to us <span aria-hidden>›</span></Link></section></SiteShell>;
}
