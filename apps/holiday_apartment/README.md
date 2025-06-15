# Holiday Apartment Website

## Requirements
### Resend
We are using Resend to send server side emails.
You have to provide a key `RESEND_API_KEY` in your .env file.

### Google Maps
We are using Google Maps to show a map.
You have to provide a key `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in your .env file.

## Getting started

## i18n
Currently, we support en, de and es.
If you have to add more languages, make sure to create a new .json file in /public/locales.
You have to register your language in /src/i18n/routing.ts afterward.

TODO:
- Google Maps Key auf Domain Ebene Absichern
- Resend Key Domain konfigurieren
- SEO Überprüfem
  - metadata (i18n?)
  - facebook, twitter, social media vorschau
  - JSON-LD
- Impressum
- Analytics? (https://www.reddit.com/r/webdev/comments/qety61/what_is_a_good_lightweight_free_alternative_to/)