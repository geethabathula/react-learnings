import React, { useReducer } from "react";
import './styles/index.css';
import Button from '@mui/material/Button';

const reducer = (state, action) => {
    if (action.type === "DELETE_PERSON") {
        const newPersons = state.data.filter((eachPerson) => {
            return eachPerson.id !== action.payload;
        });
        return {
            ...state,
            data: newPersons,
            length: state.length - 1,
        };
    }
    return state;
};
export default function Users() {
    const initialState = {
        data: [
            {
                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
            }
        ]
    };;
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_PERSON",
            payload: id,
        });
    };
    return (
        <>
            <h1>useReducer</h1>
            <div>
                {state.data.map((user) => (
                    <div className="users-data" key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <div className="btn">
                            <Button variant="contained" onClick={() => handleDelete(user.id)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div >
        </>
    );
}