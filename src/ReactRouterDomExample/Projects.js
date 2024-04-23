// import { useNavigate } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";

export default function Projects() {
    // const navigator = useNavigate();
    // const handleFeaturedProjects = () => {
    //     navigator("/projects/featured");
    // }
    // const handleLiveProjects = () => {
    //     navigator("/projects/live");
    // }
    return (
        <>
            <h1>Projects</h1>
            <div className="projects">
                {/* <button className="button" onClick={handleFeaturedProjects}>Featured Projects</button>
                <button className="button" onClick={handleLiveProjects}>Live Projects</button> */}
                <NavLink to="/projects/featured">
                    <button className="button buttons">Featured Projects</button>
                </NavLink>

                <NavLink to="/projects/live">
                    <button className="button buttons">Live Projects</button>
                </NavLink>
                <Outlet />
            </div>
        </>
    );
}