import { createAuth0Client } from "https://cdn.jsdelivr.net/npm/@auth0/auth0-spa-js@2.0.4/+esm";

let auth0 = null;

const config = {
  domain: "YOUR_AUTH0_DOMAIN",
  client_id: "YOUR_CLIENT_ID",
  cacheLocation: "localstorage",
  useRefreshTokens: true
};

async function initAuth0() {
  auth0 = await createAuth0Client(config);
}

async function loginWithPopup() {
  try {
    await initAuth0();
    await auth0.loginWithPopup();
    const user = await auth0.getUser();
    return user;
  } catch (err) {
    console.error("Auth0 login failed", err);
    return null;
  }
}

window.loginWithPopup = loginWithPopup;
