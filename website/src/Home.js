import React from 'react';
import { Link} from "react-router-dom";
import { Button } from 'reactstrap';
import Jedi from "./images/38bbcfbd3387f5aeba3dc591bd8c49be.jpg";
import "./App.css"

const Home = (props) =>{
    return(
        <div id="home">
        <div className="contain">
        <h1>Obi-Wan Kenobi</h1>
        <h4>JEDI WEB ACADEMY CEO/FOUNDER</h4>
        <h5>There is no death, there is only the Force.
        There is no emotion, there is peace.
        There is no ignorance, there is knowledge.
        There is no passion, there is serenity.
        There is no chaos, there is harmony.
        There is no death, there is the Force.</h5>
        <Button color="secondary"><Link className="hhead" to="/cont">Contact with Me</Link></Button>
        <Link className="hhead" to="/swapi"><h5>Go to SWapi</h5></Link>
        
        </div>
        <div className="jimg">
        <img src={Jedi} alt={Jedi} srcSet=""/>
        </div>
        
        </div>
        );



}
export default Home