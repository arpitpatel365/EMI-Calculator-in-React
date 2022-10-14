import React,{useState} from "react";
import './forgotPass.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    let navigate=useNavigate();

   const handleSubmit=(e)=>{
       
        var a = localStorage.getItem("email");
        var b=localStorage.getItem("password");
        console.log(`${a} ${b}`);

        if(email===""){
            alert(`Please enter your email id.`);
        }
        else if (email===a) {
            setPassword(b)
           
           document.getElementById('k1').style.display='block'

            setTimeout(() => {
                navigate('/LoginPage')
            }, 1500);
           
        }
        else{
            alert("Entered Email ID does not match with records.")
        }
    }

    return (
        <React.Fragment>
            <br />
            <div className="pass"> <br />
                <h4>Kindly Enter your email id to receive password.</h4>
                Email ID :  <input type='email' name="email" onChange={(e)=>{setEmail(e.target.value)}} size='33' /> <br /><br />
                <Button variant="primary" onClick={handleSubmit}>Click Here</Button>{' '} <br />
                <div id='k1' className="c1">Your password is {password}.</div>
            </div>
        </React.Fragment>
    );
}

export default ForgotPassword
