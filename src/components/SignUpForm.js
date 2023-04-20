import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/SignUpForm.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


export const SignUpForm = () => {
    const [username, setUsename] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    let navigate=useNavigate();

    useEffect(() => {
        document.getElementById('out').style.display = 'none';
    })

   

    const handleSubmit = (e) => {
        e.preventDefault();


        if (username === "") {
            alert("Please enter name.");
        }
        else if (email === "") {
            alert("Please enter email.");
        }
        else if (password === "") {
            alert("Please enter password.");

        }
        else {
            function myfunc(arpit, callback) {
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);

                toast.success('Account created successfully !', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
                // this.setState({ username: "", email: "", password: "" });
                callback();
            }

            function func() {
                setTimeout(() => {
                   navigate('/LoginPage')
                }, 2000)



            }
            myfunc("arpit", func);




        }


    }


    return (

        <React.Fragment>
            <br /><br />
            <div className="sign_up">
                <br />
                <center>
                    <h2>Sign Up</h2>
                    <br />
                    <form>
                        <ToastContainer
                            position="top-right"
                            autoClose={1500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss={false}
                            draggable={false}
                            pauseOnHover={false}
                        />
                        <input type='text' name="username" onChange={(e)=>{setUsename(e.target.value)}} value={username} placeholder='Enter username' /> <br /><br />
                        <input type='email' name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter email' /> <br /><br />
                        <input type='password' name="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Enter password' /> <br /><br />

                        <Button variant="info" onClick={handleSubmit}>Sign Up</Button>{' '}
                    </form>
                </center>
            </div>
        </React.Fragment>
    );
}


