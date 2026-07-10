# t2pproof.link

Proof of Humanity platform for Web3 — verified token directory + Pi CAPTCHA bypass API.

## Deploy (single branch: `main`)

Production deploys from **`main`** on Vercel.

### Required environment variables

In Vercel → Project → Settings → Environment Variables:

```
PI_API_KEY=your_pi_developer_api_key
NEXT_PUBLIC_PI_OAUTH_CLIENT_ID=drzPoB3NasD7MndiCIsF1Ej4EkSZOQfJNSpzeMT1dTw
NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI=https://t2p-proof.vercel.app/signin/callback
```

Apply to Production, Preview, and Development, then redeploy.

### Pi Sign-in redirect URI

Pi Developer Portal only accepts this callback until `www.t2pproof.link` is domain-verified:

```
https://t2p-proof.vercel.app/signin/callback
```

Register that **exact** URI under Pi Sign-in → Redirect URIs.

Users on `www.t2pproof.link` sign in via OAuth on Vercel, then are redirected back automatically.

### Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Landing page (token directory + developer API)
- `/developer` — Developer dashboard
- `/signin/callback` — Pi OAuth callback (hosted on t2p-proof.vercel.app)
- `/api/verify-pi-login` — Pi auth verification endpoint
