import { useState } from "react";

const TryFunction = ({latihan}) => {
    const [value, setValue] = useState(
       "thank you for try");
    const tabelHasil = () =>{
        setValue(value);
        
    }
    

    return (
        <div>
            <h1>latihan functional component</h1>
            <h3>Halo, Selamat {latihan}</h3>
            <input placeholder="ketikkan sesuatu"></input>
            <button onClick={tabelHasil}>-</button>
            
            
        </div>
    )}


export default TryFunction;