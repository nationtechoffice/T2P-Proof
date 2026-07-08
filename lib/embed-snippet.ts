export const EMBED_SNIPPET = `<!-- t2pproof.link Pi CAPTCHA Bypass -->
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script src="https://t2pproof.link/embed.js"></script>
<button
  id="t2pproof-verify"
  data-api-key="YOUR_API_KEY"
  data-on-success="onHumanVerified"
>
  Verify with Pi
</button>

<script>
  function onHumanVerified(result) {
    console.log('Human verified:', result.user.username);
    // Grant access to protected content
  }
</script>`
