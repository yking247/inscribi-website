import { pageMetadata } from '@/lib/site-metadata';
import { PageIntro, SiteShell } from '@/components/site-shell';

export const metadata = pageMetadata('Support', 'Contact Inscribi for account, privacy, purchase and writing support.', '/support/');

export default function SupportPage() {
  return <SiteShell><PageIntro eyebrow="SUPPORT" title="We would love to hear from you."><p>We are here to help with your notes, account and Pro access. Tell us what is helping, what feels unclear, and what you need next.</p></PageIntro><section className="support-grid"><a href="mailto:support@inscribi.app"><span>Email</span><strong>support@inscribi.app</strong><p>General support and feedback.</p></a><a href="mailto:support@inscribi.app?subject=Inscribi%20bug%20report"><span>Feedback</span><strong>Report a bug</strong><p>Tell us what happened, what you expected, and your device if you know it.</p></a><a href="mailto:support@inscribi.app?subject=Inscribi%20account%20deletion"><span>Account</span><strong>Request account deletion</strong><p>You can also delete your account inside the app from Account settings.</p></a></section></SiteShell>;
}
