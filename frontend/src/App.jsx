import React from 'react';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import keycloakConfig from './keycloak';
import './App.css';

const keycloak = new Keycloak(keycloakConfig);

function AuthApp() {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    return <button onClick={() => keycloak.login()}>Login</button>;
  }

  return (
    <div>
      <p>Welcome, {keycloak.tokenParsed?.preferred_username || 'User'}!</p>
      <button onClick={() => keycloak.logout()}>Logout</button>
      <pre>{JSON.stringify(keycloak.tokenParsed, null, 2)}</pre>
    </div>
  );
}

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <h1>React + Vite Frontend</h1>
      <AuthApp />
    </ReactKeycloakProvider>
  );
}

export default App;
