// Run: node scripts/get-spotify-token.mjs
// Gets your Spotify refresh token for .env.local

import readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

const clientId = await ask("Client ID: ");
const clientSecret = await ask("Client Secret: ");

const scope = "user-read-currently-playing user-read-recently-played";
const redirectUri = "http://127.0.0.1:5000/callback";

const authUrl =
  `https://accounts.spotify.com/authorize?` +
  new URLSearchParams({ client_id: clientId, response_type: "code", redirect_uri: redirectUri, scope });

console.log("\n1. Open this URL in your browser:\n");
console.log(authUrl);
console.log("\n2. Authorize, then copy the `code` param from the redirect URL.\n");

const raw = await ask("Paste the full redirect URL (or just the code): ");
const code = raw.includes("code=") ? new URL(raw).searchParams.get("code") : raw.trim();

const res = await fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  headers: {
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: redirectUri }),
});

const data = await res.json();
rl.close();

if (data.refresh_token) {
  console.log("\nAdd these to your .env.local:\n");
  console.log(`SPOTIFY_CLIENT_ID="${clientId}"`);
  console.log(`SPOTIFY_CLIENT_SECRET="${clientSecret}"`);
  console.log(`SPOTIFY_REFRESH_TOKEN="${data.refresh_token}"`);
} else {
  console.error("\nSomething went wrong:", data);
}
