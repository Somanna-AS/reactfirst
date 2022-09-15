import React from "react";
import { Component } from "react";

function pop(){

    alert('welcome'+ document.getElementById("m1").value);
    
}

class Main extends Component{
    render(){
        return(
        <div className="main">
            <input type="text" id="m11"></input>
            <button onClick={pop}>CLICK</button>

        </div>
    )
}
}

export default Main;