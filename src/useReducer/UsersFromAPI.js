import { useEffect, useReducer, useState } from 'react';
import './styles/index.css';

const URL = "https://jsonplaceholder.typicode.com/users";
const reducer = (state, action) => {
    if (action.type === "IS_LOADING") {
        return {
            ...state,
            isLoading: action.payload,
        }
    }
    if (action.type === "IS_ERROR") {
        return {
            ...state,
            isError: action.payload,
        }
    }
    if (action.type === "DATA_FROM_API") {
        return {
            ...state,
            usersData: action.payload,
        }
    }

    if (action.type === "DELETE_USER") {
        const newUsers = state.usersData.filter((eachUser) => eachUser.id !== action.payload);
        return {
            ...state,
            usersData: newUsers,
        }
    }
    if (action.type === "ONCLICK_EDIT") {
        return {
            ...state,
            isEditing: action.payload,
        };
    }
    if (action.type === "UPDATE_USER") {
        const newUsers = state.usersData.map((eachUser) => {
            if (eachUser.id === action.payload.id) {
                return {
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email,
                };
            } else {
                return eachUser;
            }
        });
    }
    return state;
}
export default function UsersFromAPI() {
    const initialState = {
        usersData: [],
        isLoading: false,
        isError: {
            errorStatus: false, errorMsg: ""
        },
        isEditing: { status: false, id: "", name: "", email: "" },
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const readDatafromAPI = async (apiurl) => {
        dispatch({ type: "IS_LOADING", payload: true });
        dispatch({ type: "IS_ERROR", payload: { errorStatus: false, errorMsg: "" } });
        try {
            const response = await fetch(apiurl);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            dispatch({ type: "DATA_FROM_API", payload: data });
            dispatch({ type: "IS_LOADING", payload: false });
            dispatch({ errorStatus: false, errorMsg: "" });
        } catch (e) {
            dispatch({ type: "IS_LOADING", payload: false });
            dispatch({ type: "IS_ERROR", payload: { errorStatus: false, errorMsg: e.message || "something went wrong, please try again!" } });
        }
    }
    useEffect(() => {
        readDatafromAPI(URL);
    }, []);


    if (state.isLoading) {
        return <h1>Loading...</h1>
    }
    if (state?.isError.errorStatus) {
        return (
            <div>
                <h1 style={{ color: "red" }}>{state?.isError.errorMsg}</h1>
            </div>
        );
    }

    const handleDelete = (id) => {
        dispatch({ type: "DELETE_USER", payload: id });
    }

    const updateData = (id, name, email) => {
        dispatch({
            type: "UPDATE_USER",
            payload: {
                id,
                name,
                email,
            },
        });
        dispatch({
            type: "ONCLICK_EDIT",
            payload: { status: false, id: "", name: "", email: "" },
        });
    };

    return (
        <div>
            <h1>Admin Dashboard - Users Information</h1>
            {state.isEditing?.status && (
                <EditFormContainer
                    id={state.isEditing.id}
                    incomingTitle={state.isEditing.name}
                    incomingEmail={state.isEditing.email}
                    updateData={updateData}
                />
            )}
            <div>
                {state.usersData.map((user) => {
                    return (
                        <div className='content' key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>UserName: {user.username}</p>
                            <p>Email: {user.email}</p>
                            <div className='buttons'>
                                <button onClick={() =>
                                    dispatch({
                                        type: "ONCLICK_EDIT",
                                        payload: { status: true, id: user.id, name: user.name, email: user.email },
                                    })
                                }>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const EditFormContainer = ({ id, incomingTitle, incomingEmail, updateData }) => {
    const [title, setTitle] = useState(incomingTitle || "");
    const [email, setEmail] = useState(incomingEmail || "");

    return (
        <>
            <form>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={() => updateData(id, title, email)}>
                    update data
                </button>
            </form>
        </>
    );
};
