import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUpForm.css';
import Button from 'react-bootstrap/Button';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", password: "" };
    }
   

    componentDidMount() {
        document.getElementById('out').style.display = 'none';
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var { username, email, password } = this.state;

        if (username === "") {
            alert("Please enter username.");
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
               setTimeout(()=>{
                window.location.href='http://localhost:3000/LoginPage';
               },2000)
        //    history.push('')
            

            }
            myfunc("arpit", func);




        }


    }



    render() {
        var { username, email, password } = this.state;
        return (
            <React.Fragment> <br /><br />
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
                            <input type='text' name="username" onChange={this.handleChange.bind(this)} value={username} placeholder='Enter username' /> <br /><br />
                            <input type='email' name="email" onChange={this.handleChange.bind(this)} value={email} placeholder='Enter email' /> <br /><br />
                            <input type='password' name="password" onChange={this.handleChange.bind(this)} value={password} placeholder='Enter password' /> <br /><br />
                           
                            <Button variant="info" onClick={this.handleSubmit.bind(this)}>Sign Up</Button>{' '}
                        </form>
                    </center>
                </div>
            </React.Fragment>
        );
    }
}

export default SignupForm;



