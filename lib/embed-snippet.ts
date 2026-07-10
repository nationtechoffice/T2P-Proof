export const EMBED_SNIPPET = `<!-- t2pproof.link Pi CAPTCHA Bypass -->
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script src="https://t2pproof.link/embed.js"></script>
<button
  id="t2pproof-verify"
  data-on-success="onHumanVerified"
>
  Verify with Pi
</button>

<script>
  // Pi SDK init — no API key needed client-side
  Pi.init({ version: "2.0", sandbox: false });

  function onHumanVerified(result) {
    console.log('Human verified:', result.user.username);
    // Grant access to protected content
  }
</script>

<!-- Set PI_API_KEY server-side only (Vercel env / .env.local) -->
<!-- Authorization: Key <your_pi_developer_api_key> -->`
