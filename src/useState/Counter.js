import { useState } from "react";
import './styles/index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function Counter() {
    const [count, setCount] = useState(0);
    function handleIncCount() {
        setCount(count + 1);
    }
    function handleDecCount() {
        setCount(count - 1);
    }
    return (<div className="app">
        <Typography variant="h2" component="h2" className="app" sx={{ m: 7 }}>
            {count}
        </Typography>
        <div className="btn">
            <Button variant="contained" onClick={handleDecCount}>Decrease</Button>
            <Button variant="contained" onClick={handleIncCount}>Increase</Button>
        </div>

    </div>);
}