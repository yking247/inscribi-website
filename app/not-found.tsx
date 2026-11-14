import Link from 'next/link';
import { PageIntro, SiteShell } from '@/components/site-shell';

export default function NotFound() {
  return <SiteShell><PageIntro eyebrow="INSCRIBI" title="This page could not be found."><p>Return to Inscribi or contact us if a link brought you here.</p></PageIntro><section className="data-card"><Link className="button primary" href="/">Return home</Link><p><Link href="/support">Contact support</Link></p></section></SiteShell>;
}
