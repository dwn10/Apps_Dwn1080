# ARTEQ - Professionelle Dienstleistungen

Professionelle Website für ARTEQ, die umfassende Dienstleistungen für Räumungen, Umzüge, Transport und Reinigung in Hessen, Rheinland-Pfalz und Baden-Württemberg anbietet.

## 📁 Projektstruktur

```
ARTEQ/
│
├── assets/                    # Statische Dateien
│   ├── css/                   # Stylesheets
│   │   ├── style.css          # Haupt-Stylesheet
│   │   └── responsive.css     # Stile für Mobilgeräte
│   ├── js/                    # JavaScript-Dateien
│   │   ├── main.js            # Haupt-JavaScript
│   │   └── cookies.js         # Cookie-Verwaltung
│   └── images/                # Bilder und Icons
│       ├── logo.ico           # Website-Logo
│       ├── favicon.ico        # Browser-Tab-Icon
│       └── ArteQ.png          # Bild Über uns
│
├── pages/                     # Weitere HTML-Seiten
│   ├── kontakt.html           # Kontaktseite
│   ├── Impressum.html         # Impressum
│   ├── datenschutz.html       # Datenschutzerklärung
│   ├── terms.html             # Allgemeine Geschäftsbedingungen
│   └── cookies.html           # Cookie-Richtlinie
│
├── index.html                 # Startseite
└── README.md                  # Projektbeschreibung
```

## Technische Implementierung

- Moderne, responsive Webseite mit HTML5, CSS3 und JavaScript
- Optimiert für Suchmaschinen (SEO)
- Barrierefreies Design gemäß WCAG-Richtlinien
- Kontaktformular mit Client-seitiger Validierung
- Dynamische Inhalte mit JavaScript
- Optimierte Ladezeiten

## Funktionen

### Efectos Especiales
- **Efecto de Máquina de Escribir**
  - Implementado en el cuadro de información principal
  - Muestra el texto como si se estuviera escribiendo en tiempo real
  - Incluye un cursor parpadeante al final del texto
  - Totalmente responsivo y compatible con todos los dispositivos

### Servicios
- **Räumungsservice**
  - Haushaltsauflösungen
  - Entrümpelungen
  - Schädlingsbekämpfung

- **Umzugsservice**
  - Privat- und Geschäftsumzüge
  - Möbeltransport
  - Umzugsplanung

- **Reinigungsdienstleistungen**
  - Grundreinigung
  - Unterhaltsreinigung
  - Spezielle Reinigungen

- **Zusätzliche Services**
  - Hausmeisterservice
  - Entsorgungsservice
  - Winterdienst

## Technische Details

- **Frontend**
  - HTML5 semantisch strukturiert
  - Efectos de animación CSS3 (keyframes, transitions)
  - Interacciones dinámicas con JavaScript vanilla
  - CSS3 mit modernen Layout-Techniken (Flexbox, Grid)
  - Responsive Design für alle Geräte
  - JavaScript für interaktive Elemente

- **SEO-Optimierung**
  - Meta-Tags und strukturierte Daten
  - Optimierte Ladezeiten
  - Mobile-First-Ansatz
  - Klare URL-Struktur

## Nächste Schritte

### Geplante Verbesserungen

1. **Sicherheitserweiterungen**
   - Implementierung von hCaptcha für das Kontaktformular
   - Erweiterte Formularvalidierung
   - SSL-Verschlüsselung

2. **Erweiterte Funktionen**
   - Online-Terminvereinbarung
   - Live-Chat-Support
   - Kundenportal für Auftragsverfolgung

3. **Leistung & Optimierung**
   - Lazy Loading für Bilder
   - Caching-Strategien
   - Performance-Monitoring

## Technische Anforderungen

- Moderne Browser (Chrome, Firefox, Safari, Edge)
- Aktiviertes JavaScript für volle Funktionalität
- Internetverbindung für externe Ressourcen

## Support

Bei Fragen oder Problemen wenden Sie sich bitte an:
- E-Mail: info@arteq.de
- Telefon: +49 (0) 123 456 789

## Technologien

- **Frontend**
  - HTML5
  - CSS3 (mit CSS-Variablen)
  - JavaScript (Vanilla)
  - Font Awesome für Icons
  - Google Fonts für Typografie

- **Tools & Workflow**
  - Git für Versionskontrolle
  - Responsive Design
  - Barrierefreiheit (WCAG 2.1)
  - SEO-Best Practices

## Cookie-Implementierung

### Übersicht
Diese Webseite verwendet Cookies, um die Benutzererfahrung zu verbessern und die Funktionalität der Seite zu gewährleisten. Durch die Nutzung unserer Webseite stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzerklärung zu.

### Verwendete Cookie-Typen

#### 1. Notwendige Cookies
- **Zweck**: Essenziell für die Grundfunktionen der Webseite
- **Beispiele**:
  - Session-Cookies für die Aufrechterhaltung der Benutzersitzung
  - Sicherheits-Cookies zum Schutz vor Cross-Site-Request-Forgery (CSRF)
- **Speicherdauer**: Sitzungsdauer oder gemäß gesetzlicher Vorgaben

#### 2. Präferenz-Cookies
- **Zweck**: Speichern von Benutzereinstellungen und Präferenzen
- **Beispiele**:
  - Spracheinstellungen
  - Schriftgrößen-Präferenzen
  - Dunkelmodus-Einstellungen
- **Speicherdauer**: Bis zur Löschung durch den Benutzer oder gemäß Browsereinstellungen

#### 3. Statistik-Cookies
- **Zweck**: Analyse der Webseitennutzung zur Verbesserung des Angebots
- **Erfasste Daten**:
  - Besuchte Seiten
  - Verweildauer
  - Klickverhalten
- **Tools**: Google Analytics (falls implementiert)
- **Speicherdauer**: Maximal 14 Monate

### Cookie-Consent-Banner

#### Funktionalität
- Wird beim ersten Besuch der Webseite eingeblendet
- Ermöglicht die individuelle Anpassung der Cookie-Einstellungen
- Speichert die getroffenen Auswahlpräferenzen

#### Technische Umsetzung
```javascript
// Beispiel für die Cookie-Consent-Implementierung
document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptAllBtn = document.getElementById('accept-all-cookies');
    const savePrefsBtn = document.getElementById('save-preferences');
    
    // Überprüfen, ob bereits eine Auswahl getroffen wurde
    if (!getCookie('cookie_consent')) {
        cookieConsent.style.display = 'block';
    }
    
    // Event-Listener für Buttons
    acceptAllBtn?.addEventListener('click', function() {
        setCookie('cookie_consent', 'all', 365);
        cookieConsent.style.display = 'none';
        // Alle Cookies aktivieren
    });
    
    savePrefsBtn?.addEventListener('click', function() {
        // Speichere individuelle Einstellungen
        // ...
        setCookie('cookie_consent', 'custom', 365);
        cookieConsent.style.display = 'none';
    });
});
```

### Rechtliche Anforderungen
- **DSGVO-Konformität**:
  - Informationspflicht über Cookie-Nutzung
  - Einwilligung vor dem Setzen nicht-notwendiger Cookies
  - Widerspruchsrecht für Nutzer
- **TTDSG (Deutschland)**:
  - Strikte Einwilligungspflicht für Tracking-Cookies
  - Klare Information über die Drittanbieter

### Verantwortung
- **Verantwortliche Stelle**: ARTEQ
- Kontaktmöglichkeiten: Siehe Impressum
- Datenschutzbeauftragter: Bei Bedarf über die Kontaktdaten im Impressum

### Weitere Informationen
- Detaillierte Informationen finden Sie in unserer [Datenschutzerklärung](/datenschutz.html)
- Cookie-Einstellungen können jederzeit über den Link im Footer der Webseite angepasst werden

## Barrierefreiheit

Die Webseite enthält folgende Barrierefreiheitsfunktionen:

- Kontrastreiches Design
- Tastaturnavigation
- Screenreader-Kompatibilität
- Anpassbare Schriftgrößen
- Klare Struktur und Überschriften

## Browser-Kompatibilität

- Getestet mit modernen Browsern (Chrome, Firefox, Safari, Edge)
- Vollständige Mobilgeräte-Unterstützung
- Responsive Design für alle Bildschirmgrößen

## Sprachen

Die Webseite unterstützt folgende Sprachen:
- Deutsch (Standard)
- Español
- Inglés

## Barrierefreiheit

- Tastatur-Navigation
- Verbesserter Farbkontrast
- Sprachausgabe für bessere Barrierefreiheit
- Semantische HTML5-Struktur
- ARIA-Attribute für bessere Screenreader-Kompatibilität

## Kontakt

- [Frankfurt am Main, Deutschland](https://www.google.com/maps/place/Frankfurt+am+Main)
- [+49 (0) 123 456 789](tel:+49123456789)
- [info@arteq.de](mailto:info@arteq.de)
- [WhatsApp](https://wa.me/49123456789)

## Sicherheit

### Aktuelle Maßnahmen

- **Client-seitige Validierung** aller Formulareingaben
- **XSS-Schutz** durch automatische Bereinigung von Benutzereingaben
- **HTTPS-Verschlüsselung** für alle übertragenen Daten
- **Regelmäßige Sicherheitsaudits** der Webanwendung

### Geplante Verbesserungen

#### 1. Schutz vor Bots & Spam
- [ ] **hCaptcha Integration**
  ```html
  <div class="h-captcha" data-sitekey="IHR_SITE_SCHLÜSSEL"></div>
  <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
  ```

- [ ] **Honeypot-Feld**
  ```html
  <div style="position: absolute; left: -5000px;" aria-hidden="true">
      <input type="text" name="website" tabindex="-1">
  </div>
  ```

- [ ] **Rate Limiting** (5 Anfragen/15 Minuten pro IP)

#### 2. Serverseitige Sicherheit
- [ ] **CSRF-Schutz**
  ```javascript
  // Express.js Beispiel
  const csrf = require('csurf');
  const csrfProtection = csrf({ cookie: true });
  app.use(csrfProtection);
  ```

- [ ] **Eingabevalidierung**
  ```javascript
  const { body, validationResult } = require('express-validator');
  
  app.post('/kontakt', [
    body('email').isEmail().normalizeEmail(),
    body('name').trim().isLength({ min: 2 })
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Verarbeitung fortsetzen
  });
  ```

#### 3. Sicherheitsheader
```javascript
const helmet = require('helmet');
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: 'deny' }));
```

### Meldung von Sicherheitslücken

Wir nehmen die Sicherheit unserer Webseite sehr ernst. Falls Sie eine Sicherheitslücke entdecken, kontaktieren Sie uns bitte unter [sicherheit@arteq.de](mailto:sicherheit@arteq.de). Wir schätzen Ihre Unterstützung sehr und werden jeden gemeldeten Vorfall sorgfältig prüfen.

**Bitte geben Sie keine Sicherheitslücken öffentlich bekannt**, bevor Sie uns die Möglichkeit gegeben haben, das Problem zu beheben.

## Technische Spezifikationen

- Sauberer und gut dokumentierter Code
- Semantische HTML5-Struktur
- Responsives Design (Mobil, Tablet, Desktop)
- Leistungsoptimierung
- Soziale Medien-Integration
- Unterstützung für Hilfstechnologien

## Lizenz

Dieses Projekt ist zur privaten Nutzung bestimmt. Alle Rechte vorbehalten.

---

Zuletzt aktualisiert: September 2025 von Darwin Paz*