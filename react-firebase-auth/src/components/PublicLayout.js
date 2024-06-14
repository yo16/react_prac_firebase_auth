import { Link, Outlet } from "react-router-dom";

export function PublicLayout() {
    return (
        <div>
            <div>- Public - </div>
            <nav>
                <Link to="/login">Login</Link><br />
                <Link to="/signup">SignUp</Link>
            </nav>
            <hr />
            
            <Outlet />
        </div>
    );
};
