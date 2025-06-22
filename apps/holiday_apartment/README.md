# Holiday Apartment Website

## Requirements
### Resend
We are using Resend to send server side emails.
You have to provide a key `NEXT_PUBLIC_RESEND_API_KEY` in your .env file.

### Google Maps
We are using Google Maps to show a map.
You have to provide a key `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in your .env file.

## Getting started

## i18n
Currently, we support en, de and es.
If you have to add more languages, make sure to create a new .json file in /public/locales.
You have to register your language in /src/i18n/routing.ts afterward.

TODO:
- SEO Überprüfem
  - metadata (i18n?)
  - facebook, twitter, social media vorschau
  - JSON-LD
- Impressum
- generateMetadata für jede Seite erstellen und canonical richtig setzen