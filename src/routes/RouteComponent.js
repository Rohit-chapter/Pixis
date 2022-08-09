import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/landing-page/LandingPage';
import Dashboard from 'pages/dashboard/Dashboard';

import Spinner from 'components/generics/spinner/Spinner';

import ProtectedRoute from './ProtectedRoute';

function RouteComponent() {

  const { isLoading } = useAuth0();

  function renderLandingPageRoute() {

    const landingPageRouteProperties = {
      path: '/',
      element: <LandingPage />
    };

    return <Route {...landingPageRouteProperties} />;

  }

  function renderDashboardRoute() {

    const dashboardRouteAttributes = {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      )
    };

    return <Route {...dashboardRouteAttributes} />;
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
        {renderDashboardRoute()}
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