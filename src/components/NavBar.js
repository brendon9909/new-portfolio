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
                <div className="socials">
                    <a href="mailto:brendonpillay03@gmail.com"><img className="gmail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="gmail"/></a>
                    <a target="blank" href="https://www.linkedin.com/in/brendon-pillay-281082269/"><img className="gmail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="linkedin"/></a>
                </div>
        </div>
    )
}