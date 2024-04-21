import { UserContext } from "./UserContext";
import { useContext } from "react";
import './styles/index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function B() {
    const { count, setCount } = useContext(UserContext);
    function handleIncCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <h4>This is B Component using state count</h4>
            <div className="app">
                <Typography variant="h2" component="h2" className="app" sx={{ m: 7 }}>
                    {count}
                </Typography>
                <div className="btn">
                    <Button variant="contained" onClick={handleIncCount}>Increase</Button>
                </div>

            </div>
        </div>);
}