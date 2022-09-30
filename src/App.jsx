import React, { useState } from "react";
import MyButton from "./components/MyButton";
import MyButton2 from "./components/MyButton2";

export default function App(){

    const [show, setShow]= useState(true)
    setTimeout(() => {
        setShow(false)
    }, 3000);

    return(
        <div>
            <h1>Helo react App</h1>
            {show && <MyButton />}
            {show && <MyButton2 />}
        </div>
    )
}