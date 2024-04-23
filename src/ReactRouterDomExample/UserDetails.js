import { useParams } from "react-router-dom";
import { userData } from "./UserData";
export default function UserDetails() {
    const { userId } = useParams();

    const userDetailsData = userData.find((eachUser) => eachUser.id == userId);
    return (
        <>
            <h1>User Details</h1>
            <div className="userdatabrief">
                <h3>{userDetailsData.name}</h3>
                <h3>{userDetailsData.email}</h3>
                <h3>{userDetailsData.username}</h3>
                <p>{userDetailsData.phone}</p>
            </div>
        </>
    );
}