import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import styles from './LandingPage.module.scss';

function LandingPage() {

  const { loginWithRedirect } = useAuth0();

  const loginControlAttributes = {
    className: `application-themed-button ${styles.loginControl}`,
    onClick() {
      loginWithRedirect();
    }
  };

  return (
    <div id={styles.landingPageMain}>
      <button {...loginControlAttributes}>Login here</button>
    </div>
  );

}

export default LandingPage;