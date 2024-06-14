import { useState } from "react"

import { login } from "../firebase"
import { Link } from "react-router-dom"

export function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function handleChangeEmail(event) {
        setEmail(event.currentTarget.value);
    }
    function handleChangePass(event) {
        setPass(event.currentTarget.value);
    }
    function handleOnLogin() {
        login(email, pass);
    }

    return(
        <>
            <h1>Login</h1>
            <div>
                <label>メールアドレス</label>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={(e)=> {handleChangeEmail(e)}}
                />
            </div>
            <div>
                <label>パスワード</label>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    defaultValue={pass}
                    onChange={(e)=> {handleChangePass(e)}}
                />
            </div>
            <div>
                <button
                    onClick={handleOnLogin}
                >ログイン</button>
            </div>
            <div>
                ユーザー登録は<Link to={"/signup"}>こちら</Link>から
            </div>

            <hr />
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/signup"}>SignUp</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
        </>
    )
}
