import Link from 'next/link';
import { PageIntro, SiteShell } from '@/components/site-shell';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata = pageMetadata('Inscribi Pro', 'Learn about Inscribi and its optional Pro features. Purchases are handled inside the app.', '/pricing/');
const free = ['Sermon, Bible study and general notes', 'A personal library and Gems', 'Manual Scripture references', 'Shared notes online', 'Search, Archive and Trash'];
const pro = ['Optional AI Memory with a separate permission choice', 'Bible Lookup', 'More cover choices and your own cover photos', 'Memory notifications and Home Screen widgets', 'Additional search and export options'];

export default function PricingPage() {
  return <SiteShell><PageIntro eyebrow="INSCRIBI PRO" title="More ways to return to what matters."><p>Inscribi is currently in beta. Access for invited testers may include a complimentary Pro grant.</p></PageIntro><section className="pricing-grid"><article className="price-card"><p className="eyebrow">INSCRIBI</p><h2>Begin your library</h2><p className="price-intro">Capture, keep and return to your notes.</p><ul>{free.map(item => <li key={item}>{item}</li>)}</ul></article><article className="price-card featured-price"><p className="eyebrow">INSCRIBI PRO</p><h2>Go deeper with your library</h2><p className="price-intro">Optional features for a more personal library.</p><ul>{pro.map(item => <li key={item}>{item}</li>)}</ul></article></section><section className="data-card"><h2>Purchases and restoration</h2><p>The iOS Pro product is a one-time lifetime unlock, rather than an automatically renewing subscription. Where offered, Apple displays the current price and purchase terms inside the app before payment. This website does not take payments or manage billing.</p><p>Use Restore Purchases inside Inscribi with the Apple Account used for your purchase. Contact us if Pro access does not appear as expected.</p><Link className="text-link" href="/support">Get help with Pro access</Link></section></SiteShell>;
}
