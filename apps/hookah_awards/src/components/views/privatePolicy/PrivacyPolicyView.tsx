import { Headline } from '@/components/shared/Headline'

export const PrivacyPolicyView = () => {
  return (
    <div className='container mx-auto max-w-6xl text-muted-foreground'>
      <Headline>Datenschutz</Headline>

      <div className='space-y-4'>
        <section>
          <h2 className='text-xl font-semibold text-foreground'>1. Verantwortlicher</h2>
          <div className='space-y-1'>
            <div>Aykut_Hookah - Aykut Sakarkaya</div>
            <div>c/o Online-Impressum.de #5231</div>
            <div>Europaring 90</div>
            <div>53757 Sankt Augustin</div>
          </div>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-foreground'>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p className='ml-4'>
            Wir verarbeiten personenbezogene Daten der Nutzer unserer Website nur, soweit dies zur Bereitstellung einer
            funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
            personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers oder wenn die Verarbeitung
            durch gesetzliche Vorschriften gestattet ist.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-foreground'>3. Datenverarbeitung bei Nutzung „Login mit Twitch“</h2>

          <h3 className='text-lg font-medium text-foreground ml-4'>3.1 Anbieter</h3>
          <p className='ml-4'>
            Der Login-Dienst wird bereitgestellt von: <br />
            <strong>Twitch Interactive, Inc.</strong> <br />
            350 Bush Street, 2nd Floor <br />
            San Francisco, CA 94104, USA
          </p>
          <p className='ml-4'>Datenschutzerklärung Twitch: https://www.twitch.tv/p/de-de/legal/privacy-notice/</p>

          <h3 className='text-lg font-medium text-foreground ml-4'>3.2 Zweck der Verarbeitung</h3>
          <p className='ml-4'>
            Die Verarbeitung der Daten erfolgt zum Zweck der Authentifizierung des Nutzers, zur Bereitstellung eines
            Nutzerkontos und ggf. zur Speicherung von nutzerbezogenen Einstellungen.
          </p>

          <h3 className='text-lg font-medium text-foreground ml-4'>3.3 Umfang der verarbeiteten Daten</h3>
          <p className='ml-4'>Wir erhalten je nach Benutzerfreigabe folgende Daten von Twitch:</p>
          <ul className='list-disc ml-10'>
            <li>Twitch User-ID</li>
            <li>Benutzername</li>
            <li>Avatar/Profilbild</li>
            <li>E-Mail-Adresse (falls durch Nutzer freigegeben)</li>
            <li>Weitere freigegebene Profildaten</li>
          </ul>

          <h3 className='text-lg font-medium text-foreground ml-4'>3.4 Rechtsgrundlage</h3>
          <p className='ml-4'>
            Die Verarbeitung erfolgt gemäß <strong>Art. 6 Abs. 1 lit. b DSGVO</strong>, sofern die Anmeldung der
            Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen dient. In allen anderen Fällen erfolgt die
            Verarbeitung auf Grundlage der <strong>Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO</strong>.
          </p>

          <h3 className='text-lg font-medium text-foreground ml-4'>3.5 Speicherdauer</h3>
          <p className='ml-4'>
            Wir speichern die erhaltenen Daten nur so lange, wie sie für die Bereitstellung unserer Dienste erforderlich
            sind oder bis der Nutzer sein Konto löscht.
          </p>

          <h3 className='text-lg font-medium text-foreground ml-4'>
            3.6 Widerruf der Einwilligung / Löschen des Accounts
          </h3>
          <p className='ml-4'>
            Nutzer können ihre Einwilligung jederzeit widerrufen und die Löschung ihres Accounts verlangen. Eine
            formlose Mitteilung an die oben genannte Kontaktadresse genügt.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-foreground'>4. Server-Logfiles</h2>
          <p className='ml-4'>Bei jedem Zugriff werden folgende Daten automatisch gespeichert:</p>
          <ul className='list-disc ml-10'>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit</li>
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
          </ul>
          <p className='ml-4'>Die Daten werden nach spätestens 30 Tagen gelöscht.</p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-foreground'>5. Cookies</h2>
          <p className='ml-4'>
            Falls Cookies verwendet werden, informieren wir hierüber und holen erforderliche Einwilligungen ein.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-foreground'>6. Rechte der betroffenen Personen</h2>
          <ul className='list-disc ml-10'>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            <li>Recht auf Beschwerde (Art. 77 DSGVO)</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-semibold text-foreground'>7. Kontakt für Datenschutzanfragen</h2>
          <p className='ml-4'>Bitte wenden Sie sich an die oben genannte Kontaktadresse.</p>
        </section>

        <div className='pt-4 text-muted-foreground'>Stand: Dezember 2025</div>
      </div>
    </div>
  )
}
