import { Navigate } from "react-router-dom";

import { useAuthContext } from "../AuthContext";

export function PrivateRoute({ children }) {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};
