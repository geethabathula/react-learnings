import { NavLink } from "react-router-dom";
import { userData } from "./UserData";
export default function Users() {

    return (<>
        <h1>Users</h1>
        {userData.map((user) => {
            return (
                <NavLink to={`/users/${user.id}`} key={user.id} className="userdata">
                    <h5>{user.name}</h5>
                </NavLink>)
        })}
    </>);
}