import React from "react";
import Score from "./Score";
import './NavBar.css';
const NavBar = props => (
    <nav>
        <ul>
            <li>
                <a href="/">Clicky Game</a>
            </li>
            <li>
                <Score text="score" score={props.score} /> | <Score text="highest score" score={props.highestScore} /> 
            </li>
        </ul>
    </nav>
);

export default NavBar;