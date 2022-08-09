import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

import styles from './LandingPage.module.scss';

function LandingPage() {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (isAuthenticated === true) {
    return <Navigate to={'/dashboard'} />;
  }

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