import Link from 'next/link';
import { PageIntro, SiteShell } from '@/components/site-shell';

export const metadata = { title: 'Purchase help', robots: { index: false, follow: true } };

export default function PurchaseHelpPage() {
  return <SiteShell><PageIntro eyebrow="INSCRIBI" title="Purchase help"><p>Website checkout is unavailable. Opening this page does not change your plan or confirm that a purchase was cancelled.</p></PageIntro><section className="data-card"><p>Manage or restore an App Store purchase inside Inscribi. For help with your access, contact support.</p><Link className="button primary" href="/support">Contact support</Link></section></SiteShell>;
}
