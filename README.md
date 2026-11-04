# Kartenalbum

Private Web-App für meine Pokémon-Sammelkarten – als digitales Album fürs iPhone.

**App öffnen:** https://faabnatic.github.io/Kartenalbum/

## Funktionen

- **Set-Alben** – ein Album pro Set, vom Basis-Set (1999) bis Mega-Entwicklung (181 Sets)
- **Varianten zählen** – Normal, Holo, Reverse, Sonder-Reverse, 1. Edition usw., je Sprache und Zustand
- **Album-Modus** – Blättern mit 3D-Seitenwechsel, Doppelseite im Querformat
- **3D-Kartenansicht** – Karte drehen, mit Glanzeffekt und Neigungssensor
- **Pokédex** – alle 1025 Pokémon, Filter nach Region und Generation
- **Suche** – Karten nach Name über alle Sets, „Zuletzt angesehen“
- **Filter im Set** – Kategorie, Typ, Region, Variante, Seltenheit
- **Preise** – aktueller Cardmarket-Trend je Variante und eigener Höchstwert
- **Hell/Dunkel** – automatisch oder fest eingestellt
- **Offline nutzbar** – App und bereits angesehene Kartenbilder werden zwischengespeichert

## Auf dem iPhone installieren

1. Link oben in **Safari** öffnen
2. Teilen-Symbol → **Zum Home-Bildschirm**
3. App künftig über das Symbol starten

Neue Versionen meldet die App selbst („Version x verfügbar · Aktualisieren“).

## Daten & Sicherung

Die Sammlung liegt **nur auf dem Gerät** (Browser-Speicher), nicht auf einem Server.
Unter **Mehr → Sicherung exportieren** entsteht eine JSON-Datei, die sich über **Sicherung importieren** wiederherstellen lässt.
Regelmäßig exportieren – beim Löschen der Website-Daten in Safari ist die Sammlung sonst weg.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Die komplette App (HTML, CSS, JavaScript) |
| `data.js` | Setlisten, Pokémon-Namen und Varianten |
| `sw.js` | Service Worker für Offline-Nutzung und Updates |
| `manifest.webmanifest` | App-Name und Symbole für den Home-Bildschirm |
| `icon-*.png` | App-Symbole |
| `CHANGELOG.md` | Änderungen je Version |

## Datenquellen

- Kartenbilder, Setdaten und Cardmarket-Preise: [TCGdex](https://tcgdex.dev)
- Pokémon-Artworks und Typ-Symbole: [PokeAPI](https://pokeapi.co)

Bilder und Preise werden live im Browser geladen und nicht in diesem Repository gespeichert.

## Hinweis

Privates, nicht-kommerzielles Projekt. Pokémon und alle zugehörigen Namen und Bilder sind Marken von Nintendo, Creatures Inc. und GAME FREAK inc. / The Pokémon Company. Keine Verbindung zu diesen Unternehmen.
