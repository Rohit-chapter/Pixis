import React, { useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import LandingPage from 'pages/landing-page/LandingPage';

import Spinner from 'components/generics/spinner/Spinner';

import { Route, Routes } from 'react-router-dom';

function RouteComponent() {

  const { user, isLoading, getAccessTokenSilently, isAuthenticated } = useAuth0();

  console.log(user, isAuthenticated);

  useEffect(() => {

    initialize();

  }, [isAuthenticated]);

  async function initialize() {

    if (isAuthenticated === false) {
      return;
    }

    const response = await getAccessTokenSilently();

    console.log(response);
  }

  function renderLandingPageRoute() {

    const landingPageRouteProperties = {
      path: '/',
      element: <LandingPage />
    };

    return <Route {...landingPageRouteProperties} />;

  }

  function renderSpinner() {

    if (isLoading === false) {
      return;
    }

    return <Spinner />;
  }

  function renderRoutes() {

    if (isLoading === true) {
      return;
    }

    return (
      <Routes>
        {renderLandingPageRoute()}
      </Routes>
    );
  }

  return (
    <React.Fragment>
      {renderRoutes()}
      {renderSpinner()}
    </React.Fragment>
  );
}

export default RouteComponent;