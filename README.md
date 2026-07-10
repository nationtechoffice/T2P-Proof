# t2pproof.link

Proof of Humanity platform for Web3 — verified token directory + Pi CAPTCHA bypass API.

## Pi Developer Portal setup (domain: `t2pproof.link`)

Your Pi app must use **t2pproof.link** — not t2pproof.me or vercel.app.

### 1. Update Pi Developer Portal

| Field | Value |
|-------|-------|
| **App URL** | `https://t2pproof.link` |
| **Domain verification** | `https://t2pproof.link/validation-key.txt` |
| **Pi Sign-in → Redirect URI** | `https://www.t2pproof.link/signin/callback` |

If your portal still shows `t2pproof.me`, change the App URL to `https://t2pproof.link` first, then save the redirect URI above.

### 2. Vercel environment variables

```
PI_API_KEY=your_pi_developer_api_key
NEXT_PUBLIC_PI_OAUTH_CLIENT_ID=drzPoB3NasD7MndiCIsF1Ej4EkSZOQfJNSpzeMT1dTw
NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI=https://www.t2pproof.link/signin/callback
```

Redeploy after saving.

### 3. Local development

```bash
cp .env.example .env.local
# NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI=http://localhost:3000/signin/callback
npm install && npm run dev
```

Pi allows `http://localhost:3000/signin/callback` without domain verification.

## Routes

- `/` — Landing page
- `/developer` — Developer dashboard
- `/signin/callback` — Pi OAuth callback
- `/api/verify-pi-login` — Token verification
