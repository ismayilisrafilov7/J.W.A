import React, { useState,useEffect} from 'react';
// import{Link} from "react-router-dom";
import axios from "axios";

export default function SWpeople(){
    const[state,setState]=useState(1);
    const[people,setPeople]=useState("");
    useEffect(() =>{
        async function getData(){
        const response = await axios.get(`https://swapi.dev/api/people/${state}`)
        setPeople(response.data)

        }
        getData()
    },[state])
    return(
        <div id="swapi">
       
        <h1>Character</h1>
        <h2>Your character:{people.name} <br/>
            Your character height:{people.height} <br/>
            Your character mass:{people.mass}
        </h2>
        <select value={state} onChange={e=>setState(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        </div>
        )

}