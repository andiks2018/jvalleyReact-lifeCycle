import React, { useState, useEffect } from "react";
export default function MyButton2(){
    const[count, setCount]= useState(1)
    const increment=()=>{
        setCount(count+1)
    }

    //component did mout
    useEffect(()=>{
        console.info("Mybutton2 di mount ke browser")

        //component will unMount
        return()=>{
            console.info("Mybutton2 di destroy")
        }
    }, [])

    //component did update
    useEffect(()=>{
        console.info("Mybutton2 di mount ke browser", count)
    }, [count])

    return (
        <button onClick={increment}>click lagi {count}</button>
    )
}