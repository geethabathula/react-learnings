import { useState } from "react";
import './styles/index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Form() {
    const [title, setTitle] = useState("Hello World!");
    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="app">
            <Typography variant="h4" component="h2" sx={{ m: 7, color: "#457b9d" }}>
                {title}
            </Typography>
            <form>
                <Typography variant="h5" component="h5">
                    <label htmlFor="name" >Enter </label>
                    <input type="text" id="name" onChange={handleTitle} placeholder="Please Enter Input" />
                </Typography>

                <div className="btn">
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </div>
            </form>
        </div >
    );
}