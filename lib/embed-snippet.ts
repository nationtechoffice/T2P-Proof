export const EMBED_SNIPPET = `<!-- t2pproof.link Pi Sign-in -->
<script src="https://sdk.minepi.com/pi-sdk.js"></script>

<button id="t2pproof-verify">Sign in with Pi</button>

<script>
  const PI_CLIENT_ID = "drzPoB3NasD7MndiCIsF1Ej4EkSZOQfJNSpzeMT1dTw";

  (async () => {
    await Pi.init({ version: "2.0", sandbox: false });

    document.getElementById("t2pproof-verify").addEventListener("click", () => {
      const state = crypto.randomUUID();
      sessionStorage.setItem("pi_oauth_state", state);
      Pi.signIn({
        clientId: PI_CLIENT_ID,
        redirectUri: "https://t2pproof.link/signin/callback",
        scopes: ["username", "wallet_address"],
        state,
      });
    });
  })();
</script>

<!-- Server-side: set PI_API_KEY env var for /api/verify-pi-login -->`
