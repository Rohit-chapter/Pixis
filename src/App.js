import React from 'react';

import { Auth0Provider } from '@auth0/auth0-react';

import RouteComponent from 'routes/RouteComponent';

import styles from './App.module.scss';

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {

  const auth0ProviderProperties = {
    domain: auth0Domain,
    clientId: auth0ClientId,
    redirectUri: 'http://localhost:3000'
  };

  return (
    <Auth0Provider {...auth0ProviderProperties}>
      <div id={styles.pixisAppMain}>
        <RouteComponent />
      </div>
    </Auth0Provider>
  );
}

export default App;
