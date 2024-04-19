import { useState, useEffect } from "react";
import './styles/index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function Counter() {
    const [count, setCount] = useState(0);
    const [pageWidth, setPageWidth] = useState(window.innerWidth);
    function handleIncCount() {
        setCount(count + 1);
    }
    // useEffect(() => { console.log("I am useEffect") });//is rendered upon mountiong and state change
    // useEffect(() => { console.log("I am useEffect") }, []);//Emptydependencies 
    // useEffect(() => { console.log("I am useEffect") }, [count]);//Adding count as dependencies
    //Adding Event Listener
    //we add event listener and remove the listener so as not to effect the performance
    useEffect(() => {
        const resizeEvent = () => {
            setPageWidth(window.innerWidth);
        }
        window.addEventListener("resize", resizeEvent);
        return () => {
            window.removeEventListener("resize", resizeEvent);
        }
    })
    return (<div className="app">
        <Typography variant="h4" component="h4" sx={{ m: 2 }}>
            PageWidth:{pageWidth}
        </Typography>
        <Typography variant="h2" component="h2" sx={{ m: 2, p: 1, border: 1 }}>
            {count}
        </Typography>
        <div className="btn">

            <Button variant="contained" onClick={handleIncCount}>Increase</Button>
        </div>

    </div>);
}