import { useState } from "react";
import { createUser } from "../firebase";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

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
        </div>
    );
}
