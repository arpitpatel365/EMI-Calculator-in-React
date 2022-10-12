import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';
import Button from 'react-bootstrap/Button';
// import { Button, ButtonGroup } from '@chakra-ui/react';


function LoginPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    useEffect(()=>{
        document.getElementById('navbar1').style.display='block'
        document.getElementById("sign_up_form").style.display='block';
        document.getElementById("loginPage").style.display='block';
        document.getElementById("out").style.display='none'
        
    })



    const handleClick = (e) => {
        e.preventDefault();
        var a = localStorage.getItem("username");
        var b = localStorage.getItem("email")
        var c = localStorage.getItem("password");
        console.log(`${a} ${b} ${c}`);


        if (username === "") {
            alert("Please enter your username.");
        }

        else if (email === "") {
            alert("Please enter your email.");
        }

        else if (password === "") {
            alert("Please enter your password.");
        }

        else if (username === a && email === b && password === c) {
            function showMsg(toast,callback) {
                toast.success('Login Successful !', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                callback();
            }
            const DemoCallBack=()=> {
                setTimeout(() => {
                    navigate('/EMICalculator');
                    document.getElementById('loginPage').style.display='none';
                    document.getElementById("sign_up_form").style.display='none';
                }, 2000);
                
            }
           showMsg(toast,DemoCallBack);
        }

        else if (username !== a) {
            alert("Entered username is incorrect.")
        }

        else if (email !== b) {
            alert("Entered email is incorrect.")
        }

        else {
            alert("Entered password is incorrect.")
        }


    }

    const fpassword = () => {
        navigate('/ForgotPassword')
    }



    return (
        <React.Fragment>
            <br/> <br/>
            <center>
            <div className="main">
                <div className="form_main">
                    <center> <br/>
            <h3>Login Page</h3> 
            <form >
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <label for='fname'>
                Name   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> <input type='text' id='fname' name="username" onChange={(e) => { setUsername(e.target.value) }} value={username} className='fname1'/><br /> <br />
                <label>
                Email  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='email' name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} className='femail' /> </label><br /><br />
                <label>
                Password &nbsp; &nbsp;&nbsp; <input type='password' name="password" onChange={(e) => { setPassword(e.target.value) }} value={password} className='fpassword'/></label> <br /><br />
                {/* <input type='submit' value='Login' variant="success" /> */}
                <Button variant="success" onClick={handleClick}>Login</Button>{' '}
            </form> <br />

           
            <Button variant="info" onClick={fpassword}>Forgot Password ?</Button>{' '}
            </center>
            </div>
            </div>
            </center>

            {/* <Button colorScheme='blue'>Button</Button> */}
        </React.Fragment>
    );
}


export default LoginPage;


