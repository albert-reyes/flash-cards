import './App.css'
import React, {useState, useEffect} from "react";

function App() {

    const [color, setColor] = useState("green");


    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return (<>
        <p style={{color: color}}>Count: {color}</p>
        <button onClick={changeColor}>Change Color</button>
        <button></button>
        <button></button>

    </>);
}

export default App
