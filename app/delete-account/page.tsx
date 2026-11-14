import { pageMetadata } from '@/lib/site-metadata';
import { PageIntro, SiteShell } from '@/components/site-shell';

export const metadata = pageMetadata('Delete your account', 'How to delete your Inscribi account or request help with your data.', '/delete-account/');

export default function DeleteAccountPage() {
  return <SiteShell><PageIntro eyebrow="YOUR DATA" title="Delete account / data"><p>Users can delete their account inside the Inscribi app from Account settings.</p></PageIntro><section className="data-card"><h2>What happens when you delete</h2><p>Deleting an account removes profile data and personal notes according to the app’s data deletion process. Shared-note ownership and active collaborators are checked in the app before deletion proceeds, so another person’s access is not accidentally disrupted.</p><p>For help, contact <a href="mailto:support@inscribi.app">support@inscribi.app</a>.</p></section></SiteShell>;
}
