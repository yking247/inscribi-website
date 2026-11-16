# Inscribi informational website

Public website-only source for `yking247/inscribi-website`. The Inscribi mobile
application remains in its separate private repository.

The existing Inscribi colours, Arial/Georgia typography, layout, logos and images
are retained. Next.js exports static HTML, CSS, images and JavaScript for GitHub
Pages. This repository has no website sign-in, account database, payment form,
server API, analytics, environment secrets or user notes.

## Pages and deployment

Home, `/features/`, `/pricing/`, `/privacy/`, `/terms/`, `/support/` and
`/delete-account/` preserve the existing public routes. Links without trailing
slashes resolve to directory pages. `/success/` and `/cancel/` remain as purchase
help pages and do not confirm payments. A 404, sitemap, robots file and canonical
metadata are included.

Use Node 24: `npm ci`, `npm run typecheck`, `npm run lint`, `npm run build`, then
`npm run verify:export`. `out/` is the complete deployment. The pinned Actions
workflow builds and deploys on `main`, reading the repository's Pages base path
for both the initial `https://yking247.github.io/inscribi-website/` preview and
the intended `https://www.inscribi.app/` custom domain. Set Pages publishing to
GitHub Actions and verify the preview before assigning the custom domain or
changing DNS. Domain association and HTTPS are GitHub settings; a CNAME file
alone does not configure an Actions deployment.

## Future billing

Stripe Checkout, Customer Portal and webhook routes are excluded. Checkout and
the portal were already disabled pending verified website authentication.
Their original code and architecture remain in the private application's
website directory. No new payment system is implemented here.

Future billing would need a separate authenticated server and webhook endpoint.
Keep Stripe secrets and service-role credentials on that server, verify user
identity and webhook signatures, and review entitlement handling before use.
Review GitHub Pages' commercial-use restrictions before changing this site's
informational purpose:
https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

The verified public iPhone listing is
https://apps.apple.com/gb/app/inscribi/id6816372000. Shared navigation, homepage,
feature and pricing calls to action, and footer links use this official listing.
Android remains in testing; no public Google Play listing is advertised.
