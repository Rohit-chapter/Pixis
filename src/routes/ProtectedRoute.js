import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {

  const { isAuthenticated } = useAuth0();

  if (isAuthenticated === false) {
    return <Navigate to={'/'} />;
  }

  return props.children;
}

export default ProtectedRoute;