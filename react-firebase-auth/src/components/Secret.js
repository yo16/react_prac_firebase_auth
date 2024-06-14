
import { useAuthContext } from "../AuthContext";

export function Secret() {
    const { user } = useAuthContext();

    return (
        <>
        <h1>Secret!</h1>
        
        {user &&
            (
                <>
                    <div>user.email: {user.email}</div>
                </>
            )
        }
        </>
    );
}