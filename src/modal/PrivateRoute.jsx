import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../modal/AuthContext';

const PrivateRoute = ({ children, requiredRole }) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
