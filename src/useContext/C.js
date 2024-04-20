import { UserContext } from "./UserContext";
import { useContext } from "react";
import A from "./A";
import B from "./B";
import './styles/index.css';

export default function C() {
    const { users } = useContext(UserContext);
    return (
        <>
            <h1>useContext C</h1>
            <A />
            <B />
            <h4>users data rendered using UserContext</h4>
            {
                users.map((user) => (
                    <div className="users-data" key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ))
            }
        </>
    );
}