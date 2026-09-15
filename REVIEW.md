# ShiHAN website — prepared for review

## Status

Preparation only. This package is for the `prep/shihan-st-andrews-style-2026-09-15` branch of `billmckinley-stad/shihan-putting-website`. Do not merge or launch until separately approved. No deployment workflow is included.

## Sources

- Content and all four images: uploaded `ShiHAN Website 13_9.html`, recovered from the referenced ChatGPT task's attachment (the original `/mnt/data` path is not available on this Mac).
- Design: actual approved St Andrews Dynamics v5 `index.html` and `css/style.css`, checked against `billmckinley-stad/st-andrews-dynamics-website/main` on 15 September 2026. Reference HTML blob: `90ae36a9eab3560ac267b6a7ba61cbdb58f7f315`; CSS blob: `247c697129e0f948321e2089b45851ea0de653fc`.
- ShiHAN base commit: `51e465e9743b5697b4f51c060f0ca88537d624b6`.

## Files changed

- `index.html`: replaces the older repository holding page with all 11 sections from the supplied ShiHAN Putting Lab page. Adds a main landmark, skip link, labelled navigation, image loading hints and a mobile menu control. Removes embedded CSS and image data.
- `css/style.css`: adapts the St Andrews v5 colours, font stacks, hero, section spacing, sticky headings, cards, gold rules, navigation and footer. Adds ShiHAN zones, training modes, app tiers and original product artwork styling. The longer approach and app cards span the content width. Retains equal paragraph font sizes. Corrects footer text contrast on v5's white footer.
- `js/navigation.js`: responsive menu toggle, Escape to close, destination focus and breakpoint reset. Navigation remains available without JavaScript.
- `images/shihan-logo.png`, `images/shihan-arch.jpg`, `images/eagle-putt.jpg`, `images/company-logo.png`: exact extracted original artwork.
- `REVIEW.md`: this review and launch handover.

The repository's existing photos, logo and CNAME are retained unchanged on the review branch. They are not referenced by the new page. The downloadable package contains only the new/changed files and does not include hosting configuration.

## Validation completed

- Exact original visible text preserved, apart from the new navigation controls.
- All 11 original sections preserved; unique IDs and valid internal anchor targets.
- All four image files verified byte-for-byte against the embedded originals; alt text retained.
- JavaScript syntax check passed.
- No remote fonts, scripts, trackers, form submissions or build dependencies introduced. Font fallback matches the actual St Andrews v5 implementation.
- Reviewed responsive CSS at 760px, 980px and 1100px boundaries; this is a source review, not a rendered browser test.

## Validation limitation

Automated browser rendering could not run in this environment: the bundled browser executable is unavailable, installed Chrome cannot launch in the sandbox, localhost binding is restricted, and in-app browsing blocks local file URLs. Desktop/mobile screenshots, overflow measurements, keyboard interaction and visual approval therefore remain outstanding. Do not treat this package as visually signed off.

## Review locally

Open `index.html` from this folder in Safari or Chrome. Keep the CSS, JS and images beside it in their folders. No build or publishing step is required.

## Before launch

1. Review desktop, tablet and phone layouts (1440, 1024, 768, 390 and 320px), checking cards, images, footer and email wrapping. Test mobile Menu, Escape, all section links, keyboard focus and navigation with JavaScript disabled.
2. Confirm the supplied product wording is still current: three training modes, battery duration, app/AI capabilities, target strokes gained, subscription wording and Eagle Putt availability. These were preserved, not independently validated.
3. Confirm the supplied Andy/Bill contact addresses are intended for launch; the old repository page instead used `info@shihanputting.com`.
4. Obtain explicit launch approval. Only then review the existing CNAME/hosting settings, merge the approved branch and separately arrange deployment. This task does not authorise those actions.
