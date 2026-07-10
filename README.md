# t2pproof.link

## CRITICAL: Fix Vercel domain redirect (required for sign-in)

Pi OAuth sends tokens to `https://t2pproof.link/signin/callback`.

If Vercel redirects `t2pproof.link` → `www.t2pproof.link`, the token is **lost** and sign-in always fails.

### In Vercel → Project → Settings → Domains

1. Find **t2pproof.link**
2. **Remove** or **disable** "Redirect to www.t2pproof.link"
3. Both domains should point to the project, but apex must NOT redirect to www

The site now redirects **www → apex** (correct direction for Pi).

## Pi Developer Portal

| Field | Value |
|-------|-------|
| App URL | `https://t2pproof.link` |
| Redirect URI | `https://t2pproof.link/signin/callback` |
| Domain verify | `https://t2pproof.link/validation-key.txt` |

App is **Testnet** — code uses `sandbox: true`.

## Vercel env vars

```
PI_API_KEY=your_pi_developer_api_key
```

OAuth client ID and redirect are hardcoded in the app.

## Test sign-in

1. Open `https://t2pproof.link` (no www)
2. Tap **Sign in with Pi**
3. After Pi auth you should land on `t2pproof.link/signin/callback` then return to the site

If callback shows "No sign-in response from Pi" — the Vercel domain redirect is still enabled.
