import { useState } from "react";
import './styles/index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Name() {
    // const personObj = {
    //     fname: "geetha",
    //     lname: "bathula"
    // }
    // const [data, setData] = useState(personObj);
    // function handleName() {
    //     setData({ ...data, fname: "swetha" });
    // }
    // return (
    //     <div className="app">
    //         <Typography variant="h6" component="h2" sx={{ m: 7 }}>
    //             {data.fname} {data.lname}
    //         </Typography>
    //         <div className="btn">
    //             <Button variant="contained" onClick={handleName}>Btn</Button>
    //         </div>
    //     </div>
    // );
    const [data, setData] = useState(true);
    function handleName() {
        setData(!data);
    }
    return (
        <div className="app">
            <Typography variant="h6" component="h2" sx={{ m: 7 }}>
                {data && <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ducimus ipsa eos
                    illo dolor voluptatibus nisi non dicta quisquam nesciunt vel? Facere quisquam
                    explicabo quasi consequatur debitis doloribus odio totam ullam officia quibusdam
                    ratione assumenda sed, hic porro corrupti ab laboriosam, labore illo esse magni
                    delectus!</>}
            </Typography>
            <div className="btn">
                <Button variant="contained" onClick={handleName}>{data ? "Hide" : "Show"}</Button>
            </div>
        </div>
    );
}