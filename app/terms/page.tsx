import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { pageMetadata } from '@/lib/site-metadata';

export const metadata = pageMetadata('Terms of Use', 'Terms for Inscribi accounts, writing, collaboration, optional features and app-store purchases.', '/terms/');

export default function TermsPage() {
  return <LegalPage eyebrow="TERMS OF USE" title="Using Inscribi." intro="Effective 14 November 2026. Inscribi is operated by Yolanda King in the United Kingdom. Contact support@inscribi.app for help.">
    <h2>Your account and writing</h2>
    <p>Keep your account access secure and use Inscribi lawfully. You remain responsible for the notes, images and other content you add, including permission to use material belonging to someone else. You retain ownership of your content and allow us and our service providers to process it as needed to provide your chosen Inscribi features, as explained in the <Link href="/privacy/">Privacy Policy</Link>.</p>
    <h2>Sharing and Community</h2>
    <p>Notes are private unless you share or publish them. Invite people you trust and check the permissions you give them. Do not upload illegal, abusive, threatening or infringing material, impersonate other people or misuse access to another person’s writing. Contact support to report inappropriate content or a concern about another user. We may restrict access where needed to address misuse or protect the service.</p>
    <h2>Optional features</h2>
    <p>AI Memory requires a separate permission choice. AI output can be mistaken or incomplete: review it against your own notes and sources. Bible Lookup, Memory and other reflection tools support your writing; they are not professional medical, legal or pastoral advice. Bible translations remain subject to their applicable rights and attribution.</p>
    <h2>Pro purchases</h2>
    <p>The iOS Pro product is a one-time lifetime unlock rather than an automatically renewing subscription. Apple displays the applicable price and terms before a purchase. A lifetime unlock has no recurring subscription to cancel; refunds and purchase history are handled through the relevant app store. Complimentary tester access may also be provided separately.</p>
    <p>Restore Purchases is available inside Inscribi. Use the Apple Account used for the purchase and contact support if access does not appear. This informational website does not collect payments or manage billing. Apple’s applicable purchase terms and <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">standard app licence agreement</a> apply to distribution through the App Store.</p>
    <h2>Availability and care of your library</h2>
    <p>Inscribi is currently in beta. Features and availability may change, and services can be interrupted. We work to preserve writing and recover interrupted edits, but you should keep a copy of material you cannot afford to lose. A successful save on a disconnected device may still need to synchronise when its connection returns.</p>
    <h2>Account deletion</h2>
    <p>You can delete your account inside Inscribi. An active collaboration on a note you own may need to be resolved before deletion can safely finish. Deletion and retention are described in the <Link href="/privacy/">Privacy Policy</Link> and <Link href="/delete-account/">account-deletion guidance</Link>. Deleting Inscribi does not reverse a store purchase or automatically obtain a refund.</p>
    <h2>Your legal rights</h2>
    <p>These terms do not exclude rights or remedies that consumer or data-protection law gives you, or liability that cannot lawfully be excluded. If something is wrong, contact <a href="mailto:support@inscribi.app">support@inscribi.app</a> so we can help.</p>
  </LegalPage>;
}
