import { Link, useNavigate } from "react-router-dom"

import { logout } from "../firebase";

export function Home() {
    const navigate = useNavigate();
    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogout}>ログアウト</button>

            <hr />
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/signup"}>SignUp</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
        </>
    )
};
