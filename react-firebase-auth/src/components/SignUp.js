import { Link } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../firebase";
//import { useAuthContext } from "../AuthContext";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    //const { user } = useAuthContext();

    function handleChangeEmail(event) {
        setEmail(event.currentTarget.value);
    }
    function handleChangePass(event) {
        setPass(event.currentTarget.value);
    }

    function handleOnRegist() {
        createUser(email, pass);
    }

    return (
        <div>
            <h1>ユーザー登録</h1>
            <div>
                <label>メールアドレス</label>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    defaultValue={email}
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
                    onClick={handleOnRegist}
                >登録</button>
            </div>

            <hr />
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/signup"}>SignUp</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
        </div>
    );
}
