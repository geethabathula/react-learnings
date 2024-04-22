import { useNavigate } from "react-router-dom";
export default function HomePage() {
    const clickmeNavigator = useNavigate();

    function click() {
        clickmeNavigator('/clickme')
    }
    return (
        <div id="home">
            <h1>Home Page</h1>
            <button onClick={click}>Click Me</button>
        </div>
    );
}