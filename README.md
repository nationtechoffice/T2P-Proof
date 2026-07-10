# t2pproof.link

Proof of Humanity platform for Web3 — verified token directory + Pi CAPTCHA bypass API.

## Deploy (single branch: `main`)

Production deploys from **`main`** on Vercel. All changes should be merged to `main` — preview branches show different URLs and can look like a separate site.

### Required environment variable

In Vercel → Project → Settings → Environment Variables:

```
PI_API_KEY=your_pi_developer_api_key
```

Apply to Production, Preview, and Development, then redeploy.

### Local development

```bash
cp .env.example .env.local
# Add your PI_API_KEY to .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Landing page (token directory + developer API)
- `/developer` — Developer dashboard
- `/api/verify-pi-login` — Pi auth verification endpoint
