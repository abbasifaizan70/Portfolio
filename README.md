# Faizan Abbasi — Portfolio

An animated, responsive static portfolio. It has no runtime framework, API keys, database, tracking scripts, or backend. All fonts and portrait assets are served locally.

## Run locally

Requires Node.js 22+.

```sh
npm install
npm run build
npm run dev
```

Open http://127.0.0.1:4173.

## Edit

- `src/index.html`: homepage content and sections.
- `src/projects.mjs`: project descriptions, contributions, stacks, and links.
- `src/history.mjs`: experience, skills, education, and writing.
- `src/legacy-projects.json`: the complete original 13-project inventory.
- `src/styles.css`: visual system, responsive layouts, and animation.
- `src/app.js`: motion and theme preferences, navigation, project filters/search, dialogs, email copy, code-example tabs, typing, and the animated portrait network.
- `src/assets/`: self-hosted original portrait, fonts, and favicon.
- `src/assets/social-card.png`: self-contained social-sharing image, copied into each build.

`npm run build` generates the homepage, seven static project pages, project JSON, sitemap, and robots file. It also checks local links and content parity with the original portfolio. Project cards open an accessible native dialog when JavaScript is available; their static case-study links work without JavaScript.

## Deploy to Vercel

The included `vercel.json` sets the build command and static output directory. Import this source into your Vercel account, or copy the files into the repository connected to your existing portfolio. The build uses Vercel’s assigned production domain for canonical, social, and sitemap URLs. Set `SITE_ORIGIN` to override it for a custom domain:

```sh
SITE_ORIGIN=https://your-portfolio.example npm run build
```

This sets canonical, Open Graph, robots, and sitemap URLs. No secrets are needed. Legacy routes (`/projects`, `/experience`, `/education`, `/blogs`, `/contact`, and `/home`) redirect to their corresponding sections.

This checkout is independent of the Sites preview and does not include its hosting configuration.

## Validation

`npm test` runs browser checks against the local server with an isolated Chrome profile. It covers project filtering, all dialogs and focus restoration, mobile navigation, clipboard, project search, career/skill details, persisted theme and motion preferences, reduced-motion support, static case pages, responsive overflow, browser errors, and axe accessibility checks. The local default Chrome executable is macOS Google Chrome; set `CHROME_PATH` if using a different installation.

Test reports and screenshots go to `artifacts/` (ignored by Git).

## Content boundaries

Project copy describes Faizan's personal contributions, not authorship of the entire client product. Carli and House use contribution summaries and contact links because their public product URLs have not been verified. Their private repositories, screenshots, and internal findings are not included. Voxa and the agent systems lab are identified as personal/assessment projects. Project marks identify the work; they do not pretend to be product screenshots.

Contact email, LinkedIn, Upwork, and the existing résumé link were taken from the public portfolio sources. The external résumé was not rewritten. Update its Google Drive document separately if needed.

Fonts: DM Sans and Space Grotesk (SIL Open Font License; notices included beside the font assets). Portrait: Faizan's original portfolio photograph, resized for the web.

## Developer motion

The homepage includes an animated technology strip, a portrait network, a larger portrait with smooth mouse-follow tilt, layered skill badges and reactive lighting, card highlights, and a code playground with React/Rails/SQL examples, keyboard-accessible tabs, replay, and copy. Code examples are illustrative and do not make backend requests. The portrait also supports arrow-key tilt and Escape to reset when focused. The Motion toggle and system reduced-motion preference stop decorative animation; the canvas also stops when it is offscreen or the page is hidden. Instagram is excluded at the owner's request.

To enable direct WhatsApp contact, set `WHATSAPP_NUMBER` in Vercel to the confirmed international number (including country code) and redeploy. Until configured, the portfolio keeps its working email contact. The header, contact section, and project discussion links switch to WhatsApp together.
