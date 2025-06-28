const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL || "http://localhost:8081",
  realm: import.meta.env.VITE_KEYCLOAK_REALM || "myrealm",
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || "react-app",
};

export default keycloakConfig; 