# AI Guidance

## Big picture
- This repo is a single-page "PUG Web3 Memes" landing experience: `index.html` stitches together the hero, tokenomics, NFT showcase, meme gallery, tech-lab radar, oracle, footer, and the simulated AI/agent shell.
- `styles-web3.css` (≈1.3k lines) defines the Solana-inspired palette, gradients, background animation, responsive grids, and component modifiers referenced in the HTML classes (e.g., `.hero`, `.nft-card`, `.tech-card`, `.oracle`, `.btn-primary`). `style.css` is a standalone alternative landing page and not wired into `index.html`, so focus on `styles-web3.css` when updating the live experience.
- `script.js` wires every interaction: wallet simulation, meme filters, likes/shares, NFT view/buy flows, hero subtitle cycling, radar status syncing, stats animation, notification helper, smooth scroll, AI agent dialog, and the oracle readings. New behavior should stay inside `DOMContentLoaded` so the DOM queries still work.

## Developer workflow & environment
- There is no build/test toolchain; opening `index.html` in a browser (or running a minimal static server such as `npx http-server -c-1 .`) is the validation step for any change.
- `README.md` documents the product sections, explains the Solana/Metaplex integration hints, and shows how to append meme/NFT cards; keep it updated if you evolve the page structure or add real wallet integration.
- The codebase is purely client-side: no package.json, no bundlers, and no backend dependencies. For future Web3 integrations, follow the README guidance (`@solana/web3.js`, wallet adapters, Metaplex, IPFS) rather than inventing new pipelines.

## Patterns and conventions to follow
- **DOM-driven UI**: The JS relies on query selectors plus data attributes. Example: `.filter-btn[data-filter="hodl"]` shows `.meme-card` elements whose `data-category` matches or are `.upload-card`; keep those attributes in sync when you add/remove filters or memes.
- **Notification & wallet state**: `showNotification` (line ~110) centralizes toast styling and is reused by wallet connect (`#connectWallet`), buys (`.btn-buy`), uploads (`.btn-upload`), and oracle refreshes. Update the notification text there and in the helper to avoid duplicating style logic.
- **NFT/meme card structure**: Each `.nft-card` needs `.nft-badge`, `.nft-image-container`, `.nft-info`, `.btn-buy`, and `.btn-view`. `script.js` expects `.nft-title` to surface names in notifications and `.btn-buy` to live inside `.nft-card`; keep that naming when introducing new cards. Meme cards follow the `data-category`/`.meme-btn` pattern so filters and like counters keep working.
- **Oracle & AI shell IDs**: The oracle needs `#oracleButton`, `#oracleQuote`, `#oraclePredictions`, and `#oracleOrb` for the reading/pulse. The agent shell listens to `#agentLaunch`, `#agentMessages`, `#agentForm`, `#agentInput`, and `#agentShell`, so renaming those IDs breaks the simulated chat.
- **Tech lab radar**: `.tech-card` elements carry `data-tech` and trigger `#radarStatus` updates via mouseenter/focus plus automatic cycling. Maintain `data-tech` values (`quantum`, `ai`, `solana`) when you reorder or extend this section.

## Cross-project notes
- There is a sibling copy under `pug/crypto-pug` with its own `assets/css/styles.css` and `assets/js/script.js`. Treat that directory as a standalone demo (refer to its README) and do not mix assets unless you intentionally sync designs; the root `index.html` is the canonical site.
- Most imagery lives at the repo root (e.g., `photo-1517423568366-8b83523034fd.avif`, `pug/pug-hero.jpg`), so keep new media there or under `pug/` variants to match the paths used in `index.html`.

## Validation notes & feedback
- After edits, open `index.html` locally and verify the interactive bits (wallet connect flow, filters, buy/view buttons, oracle refresh, agent responses) still fire without errors.
- If you add more wallet/Metaplex logic, keep the old simulation untouched (helps keep the current hero experience deterministic).

Please flag any sections here that feel unclear or incomplete so I can iterate.