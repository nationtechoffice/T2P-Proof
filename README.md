# t2pproof.link

Proof of Humanity platform for Web3 — verified token directory + Pi CAPTCHA bypass API.

## Pi Sign-in domain: `t2pproof.me`

Your Pi Developer Portal app (**T2P Proof**, Testnet) is registered on **`t2pproof.me`**.

Pi **rejects** redirect URIs on `t2p-proof.vercel.app` or `t2pproof.link`.  
You must use:

```
https://t2pproof.me/signin/callback
```

### Step 1 — Point `t2pproof.me` to Vercel

In your domain registrar (where you bought t2pproof.me), add DNS:

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | `76.76.21.21`      |
| CNAME | www  | `cname.vercel-dns.com` |

Then in **Vercel → Project → Settings → Domains**, add:

- `t2pproof.me`
- `www.t2pproof.me`

(Use the exact DNS records Vercel shows you.)

### Step 2 — Pi Developer Portal

1. **Configuration → App URL:** `https://t2pproof.me`
2. **Checklist → App Domain:** verify via `https://t2pproof.me/validation-key.txt`
3. **Pi Sign-in → Redirect URIs:** save exactly:
   ```
   https://t2pproof.me/signin/callback
   ```
   (The red error should disappear once DNS is live.)

### Step 3 — Vercel environment variables

```
PI_API_KEY=your_pi_developer_api_key
NEXT_PUBLIC_PI_OAUTH_CLIENT_ID=drzPoB3NasD7MndiCIsF1Ej4EkSZOQfJNSpzeMT1dTw
NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI=https://t2pproof.me/signin/callback
```

Redeploy after saving.

## How sign-in works

1. User on `www.t2pproof.link` taps **Sign in with Pi**
2. OAuth uses callback `https://t2pproof.me/signin/callback`
3. After Pi auth, user is sent back to `www.t2pproof.link` automatically

## Local development

Use localhost callback (allowed by Pi without domain verification):

```
http://localhost:3000/signin/callback
```

```bash
cp .env.example .env.local
# For local dev:
# NEXT_PUBLIC_PI_OAUTH_REDIRECT_URI=http://localhost:3000/signin/callback
npm install && npm run dev
```

## Routes

- `/` — Landing page
- `/developer` — Developer dashboard
- `/signin/callback` — Pi OAuth callback (must be reachable on t2pproof.me)
- `/api/verify-pi-login` — Token verification
