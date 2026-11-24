# Kroko Illustration

Astro-Portfolio für Illustrationen. Inhalte und Medien liegen im Repository; die statische Website wird mit GitHub Pages veröffentlicht.

## Lokal entwickeln

Voraussetzung: Node.js 22.23.4 oder neuer.

```sh
npm install
npm run dev
```

`npm run build` erstellt die statische Seite in `dist/`.

## Projekte über die CMS-Maske bearbeiten

Die Projekte werden in `src/content/projects.json` gepflegt. Die Bearbeitungsmaske unter `/admin/` enthält Titel, URL-Slug, Reihenfolge, Kategorie, Tags, Frontpage-Cover samt Alternativtext, Galerie, Auftraggeber und Beschreibungen.

Für lokale Änderungen:

1. Terminal 1: `npm run dev`
2. Terminal 2 im Repository: `npx decap-server`
3. Öffne `http://localhost:4321/admin/`

Der lokale Proxy schreibt Änderungen direkt in die Dateien dieses Repositorys. Er ist nur für die lokale Entwicklung gedacht; nicht öffentlich ins Netzwerk freigeben.

Für die CMS-Maske auf GitHub Pages müssen `repo` in `public/admin/config.yml` auf `OWNER/REPOSITORY` gesetzt und ein GitHub-OAuth-Backend eingerichtet werden. Decap CMS benötigt für GitHub-Anmeldungen einen Authentifizierungsdienst. Die lokale Maske funktioniert unabhängig davon.

## GitHub Pages veröffentlichen

1. Ein GitHub-Repository erstellen und dieses lokale Repository als `main`-Branch dorthin pushen.
2. In GitHub unter **Settings → Pages** **GitHub Actions** als Quelle wählen.
3. Weitere Pushes auf `main` bauen und veröffentlichen die Website automatisch. Der Workflow kann auch manuell über **Actions** gestartet werden.

`astro.config.mjs` und der Deploy-Workflow berücksichtigen automatisch den Repository-Unterpfad bei GitHub-Pages-Projektseiten. Es ist derzeit kein GitHub-Remote konfiguriert; vor dem Push muss das Ziel-Repository hinzugefügt werden.

## Weitere Inhalte

- Vorstellung, Kontakt und Layout: `src/pages/about.astro` und `src/layouts/SiteLayout.astro`
- Projekttexte und Bildpfade: `src/content/projects.json`
- Bilder: `public/images/`; Videos: `public/videos/`
- CMS-Konfiguration: `public/admin/config.yml`

Die bestehenden Beispieltexte und Beispielgrafiken vor einer Veröffentlichung durch finale Inhalte ersetzen.
