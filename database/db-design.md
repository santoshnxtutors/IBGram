# IBGram Database Design

## Boundaries

The database is split around the same major business boundaries as the product:

- Auth and RBAC: `User`, `Role`, `Permission`, join tables, sessions, refresh tokens, and login attempts.
- Generated content: `GeneratedPage` plus revisions, blocks, FAQs, metadata, schema, internal links, quality scores, publishing logs, and generation jobs/logs.
- Locations: country, state, city, area, sector, society, and school hierarchy.
- Tutors: tutor profiles, subjects, curriculum coverage, service locations, availability, and assets.
- SEO: canonicals, redirects, sitemap entries, robots rules, keyword clusters, and anchor variants.
- Assets and imports: provider-agnostic asset records, folders, CSV imports, rows, and row errors.
- Audit and settings: audit log, site settings, SEO settings, and AI provider settings.

## Security

Passwords are stored as Argon2 hashes. Session and refresh tokens are stored as hashes only. Permissions are persisted in PostgreSQL and assigned to roles through `RolePermission`.

## Publishing Model

`GeneratedPage.status` controls editorial workflow. `GeneratedPage.indexFlag`, `robotsTag`, `sitemapIncluded`, canonical fields, and SEO child tables control search behavior independently from content status.
