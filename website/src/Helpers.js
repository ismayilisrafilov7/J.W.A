import {useState} from 'react';

const Helpers = (initialVal)=>{
    const[state,setState]=useState(initialVal);
    const handleChange=e=>{
        setState(e.target.value);
    }
    const handleReset=()=>{
        setState("")
    }
    return[state,handleChange,handleReset]
}
export default Helpers