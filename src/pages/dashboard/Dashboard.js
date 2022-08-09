import React, { useState, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import Spinner from 'components/generics/spinner/Spinner';

import { registerUser } from 'services/auth.services';

import styles from './Dashboard.module.scss';

function Dashboard() {

  const { user } = useAuth0();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    initialize();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function initialize() {

    const params = {
      name: user.name,
      email: user.email,
      emailVerified: user.email_verified,
      profilePicture: user.picture
    };

    await registerUser(params);

    setLoading(false);

  }

  function renderSpinner() {

    if (loading === false) {
      return;
    }

    return <Spinner />;

  }

  function renderContent() {

    if (loading === true) {
      return;
    }

    return (
      <h3>Dashboard</h3>
    );
  }

  return (
    <div id={styles.dashboardMain}>
      {renderContent()}
      {renderSpinner()}
    </div>
  );
}

export default Dashboard;