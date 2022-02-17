import { useState } from "react";

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0);

    const handlePlus = () =>{
        setValue(value + 1);
    }
    const handleMinus = () =>{
        if (value>0){
        setValue(value - 1);
    }
}

    return (
        <div>
            <h1>Membuat komponen dengan functional component</h1>
            <h3>Halo {nama}, Selamat Belajar</h3>
            <button onClick={handleMinus}>-</button>
            <span>{' '}{value}{' '}</span>
            <button onClick={handlePlus}>+</button>
            m        </div>
    )}

FunctionalComponent.defaultProps = {
    nama : 'users'
}
export default FunctionalComponent;