import { Navigate, Link, Outlet } from "react-router-dom";

import { useAuthContext } from "../AuthContext";

export function ProtectedLayout() {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" />;
    }
    
    return (
        <div>
            <div>- Protected - </div>
            <nav>
                <Link to="/">Home</Link><br />
                <Link to="/secret">Secret</Link>
            </nav>
            <hr />

            <Outlet />
        </div>
    )
};
