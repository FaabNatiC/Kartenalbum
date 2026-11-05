# Kartenalbum

Private Web-App für meine Pokémon-Sammelkarten – als digitales Album fürs iPhone und den Browser.

**App öffnen:** https://faabnatic.github.io/Kartenalbum/

Aktuelle Version: **1.26** · Änderungen je Version stehen in [`CHANGELOG.md`](CHANGELOG.md).

## Funktionen

**Sammeln**
- **Alben als Cover oder Liste** – große Cover-Ansicht oder kompakte Liste mit Set-Logo, Suche nach Name, Kürzel oder Serie, Promo-Alben mit „PROMO“-Badge
- **Set-Alben** – deutsche/englische Sets vom Basis-Set (1999) bis Mega-Entwicklung (181 Sets) und japanische Sets ab Sonne & Mond (91 Sets)
- **Album-Sprache** – Deutsch, Englisch oder Gemischt; dasselbe Set auch als zwei getrennte Alben, erkennbar an der Flagge. Englische Alben zeigen englische Karten- und Set-Namen, japanische Sets den japanischen Namen – der deutsche steht jeweils klein darunter
- **Kamera-Scan** – Bereich „Scannen“: erkennt Set-Kürzel und Kartennummer, Serien-Scan mit Liste zum Bestätigen, Nummer auch eintippbar (Texterkennung wird beim ersten Scan geladen)
- **Varianten zählen** – Normal, Holo, Reverse, Poké-Ball-/Meisterball-Reverse, 1. Edition usw., je Sprache und Zustand
- **Filter im Set** – Alle · Gesammelt · Fehlend · Doppelt, dazu Kategorie, Typ, Region, Variante, Seltenheit und Suche nach Name oder Nummer
- **Wunschliste** – eigener Tab, Priorität Niedrig/Normal/Hoch, nach Sets gruppiert, Preis und Summe, als Text teilbar; gezählte Karten verschwinden automatisch
- **Notiz & Grading** – pro Karte, z. B. „PSA 9“

**Ansehen**
- **Album-Modus** – Blättern mit 3D-Seitenwechsel, Doppelseite im Querformat und am Rechner
- **3D-Kartenansicht** – Karte drehen, mit Glanzeffekt (am iPhone auch per Neigung)
- **Pokédex** – alle 1025 Pokémon, Filter nach Region und Generation
- **Suche** – Karten nach Name über alle Sets (deutsch, englisch, japanisch), „Zuletzt gesucht“

**Werte & Statistik**
- **Preise** – aktueller Cardmarket-Trend je Variante und eigener Höchstwert, täglich automatisch aktualisiert; Cardmarket-Knopf führt direkt zur Karte
- **Portfolio** – Wertkurve mit Zeitraum, Aufteilung nach Set, Sprache, Seltenheit und Typ, Gewinner & Verlierer, alle Karten nach Wert
- **Set-Details** – Setwert und Verlauf, Kosten bis komplett, Aufteilung, Gewinner & Verlierer je Set
- **Erfolge** – 106 selbst gestaltete Orden mit 3D-Prägung in Gruppen (Sammlung, Trainer Kanto/Johto, Legendäre, Familien, Typ-Trainer); im Detail drehbar, mit Stand, nächster Stufe und Liste der benötigten Pokémon

**Allgemein**
- **Einstellungen** – über das Zahnrad oben rechts: Konto, Darstellung, Sicherung, Tab-Leiste u. v. m.
- **Tab-Leiste anpassbar** – Alben, Pokédex und Mehr fest, dazu 1 bis 3 weitere Bereiche; Reihenfolge frei, ausgeblendete Bereiche unter Mehr
- **Top 3 im Album** – deine wertvollsten Karten oder die des ganzen Sets
- **Konto & Abgleich** – Anmeldung mit E-Mail/Passwort oder Google; Sammlung live auf allen Geräten
- **Browser-Version** – eigenes Layout ab 900 px mit Seitenleiste, Karten-Panel und Tastatur (← → · Esc · /)
- **Ohne Zoom** – die App lässt sich am iPhone nicht versehentlich vergrößern
- **Hell/Dunkel** – automatisch oder fest eingestellt
- **Offline nutzbar** – App und bereits angesehene Kartenbilder werden zwischengespeichert

## Auf dem iPhone installieren

1. Link oben in **Safari** öffnen
2. Teilen-Symbol → **Zum Home-Bildschirm**
3. App künftig über das Symbol starten

Neue Versionen meldet die App selbst („Version x verfügbar · Aktualisieren“). Ein neues App-Symbol erscheint erst, wenn die App vom Home-Bildschirm entfernt und neu hinzugefügt wird.

## Daten, Konto & Sicherung

- **Ohne Anmeldung** liegt die Sammlung nur auf dem Gerät (Browser-Speicher).
- **Mit Konto** (Einstellungen → Konto & Abgleich) wird sie zusätzlich in Firebase (Google, Rechenzentrum Frankfurt) gespeichert und zwischen allen Geräten abgeglichen. Nur freigegebene E-Mail-Adressen dürfen speichern; jede Person sieht nur ihre eigene Sammlung.
- **Sicherung:** Einstellungen → Sicherung exportieren erzeugt eine JSON-Datei, die sich über Sicherung importieren wiederherstellen lässt – auch mit Konto sinnvoll.
- **Zurücksetzen:** Einstellungen → Sammlung zurücksetzen löscht alles außer den Einstellungen (bei Anmeldung auf allen Geräten).

### Firebase-Einrichtung (einmalig)

- Authentication: Anmeldemethoden „E-Mail-Adresse/Passwort“ und „Google“, autorisierte Domain `faabnatic.github.io`
- Firestore-Datenbank (`europe-west3`), Regeln mit Freigabeliste der erlaubten E-Mail-Adressen
- Die Web-Konfiguration steht in `index.html` (`FIREBASE_CONFIG`) – diese Werte sind nicht geheim; geschützt werden die Daten über die Firestore-Regeln.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Die komplette App (HTML, CSS, JavaScript) |
| `data.js` | Deutsche/englische Setlisten, Pokémon-Namen und Varianten |
| `data-ja.js` | Japanische Setlisten – wird nur bei Bedarf nachgeladen |
| `sw.js` | Service Worker für Offline-Nutzung und Updates |
| `manifest.webmanifest` | App-Name und Symbole für den Home-Bildschirm |
| `icon-180.png`, `icon-192.png`, `icon-512.png` | App-Symbole |
| `CHANGELOG.md` | Änderungen je Version |
| `README.md` | Diese Übersicht |

## Datenquellen

- Kartenbilder, Setdaten und Cardmarket-Preise: [TCGdex](https://tcgdex.dev)
- Pokémon-Artworks und Typ-Symbole: [PokeAPI](https://pokeapi.co)
- Anmeldung und Abgleich: [Firebase](https://firebase.google.com)
- Ersatzbilder für McDonald’s-Karten: [pokemontcg.io](https://pokemontcg.io)
- Texterkennung beim Kamera-Scan: [Tesseract.js](https://github.com/naptha/tesseract.js) (über jsDelivr)

Bilder und Preise werden live im Browser geladen und nicht in diesem Repository gespeichert.

## Hinweis

Privates, nicht-kommerzielles Projekt. Pokémon und alle zugehörigen Namen und Bilder sind Marken von Nintendo, Creatures Inc. und GAME FREAK inc. / The Pokémon Company. Keine Verbindung zu diesen Unternehmen.
