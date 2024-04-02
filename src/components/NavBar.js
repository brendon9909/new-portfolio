import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function NavBar(){
    const {active, setActive} = useContext(UserContext)
    return(
        <div className="nav">
                <NavLink to="/" onClick={() => setActive("home")}><div className={`item ${active === "home"? "active": ""}`}>Home</div></NavLink>
                <NavLink to="/about" onClick={() => setActive("about")}><div className={`item ${active === "about"? "active": ""}`}>About Me</div></NavLink>
                <NavLink to="/projects" onClick={() => setActive("projects")}><div className={`item ${active === "projects"? "active": ""}`}>Projects</div></NavLink>
                <NavLink to="/cv" onClick={() => setActive("cv")}><div className={`item ${active === "cv"? "active": ""}`}>CV</div></NavLink>
        </div>
    )
}