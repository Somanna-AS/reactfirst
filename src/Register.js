import React from "react";
import bgre from "./rebg.png"
import './Register.css';

function pop(){
    var name = document.getElementById("n").value;
    var uname = document.getElementById("un").value;
    var email = document.getElementById("e").value;
    var pno = document.getElementById("ph").value;
    alert('Welcome  '+ name + "\nYour user name is :" + uname +"  \nRegitered email is :" + email + "\nRegistered phone number is :" + pno);

    
}

function Register(){
    return(
        <div class="Register">
            <h2>Register Page</h2><br></br>
            <h3>Fill the Details to Register :</h3>
            <div class="form" >
                <from id="mform">
                <label for="name"><b>NAME</b></label><br></br>
                <input type="text" placeholder="Enter Name" required id="n"></input><br></br><br></br>

                <label for="uname" ><b>USER NAME</b></label><br></br>
                <input type="text" placeholder="Enter User Name" required id="un"></input><br></br><br></br>

                <label for="Pwd"><b>PASSWORD</b></label><br></br>
                <input type="password" placeholder="Enter Password" required></input><br></br><br></br>

                <label for="email"><b>E-MAIL</b></label><br></br>
                <input type="email" placeholder="Enter Email" required id="e"></input><br></br><br></br>

                <label for="phno"><b>PHONE NUMBER</b></label><br></br>
                <input type="tel" placeholder="Enater Phone Number" required id="ph"></input><br></br><br></br>

                <button type="submit" class="btn" onClick={pop} >Register</button><br></br>
                <a href="#">go back to home</a>
                </from>
                </div>

            
        </div>

    )
}

export default Register;