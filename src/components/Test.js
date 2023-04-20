import React from "react";
import './forgotPass.css'
import Button from 'react-bootstrap/Button';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "",password:"" };
    }
    
    componentDidMount(){
        document.getElementById('sign_up_form').style.display='none';
        document.getElementById("out").style.display='none';
        document.getElementById('loginPage').style.display='block'
    }

    handleSubmit = (e) => {
        var {email}=this.state;
        var a = localStorage.getItem("email");
        var b=localStorage.getItem("password");
        console.log(`${a} ${b}`);

        if(email===""){
            alert(`Please enter your email id.`);
        }
        else if (email===a) {
            this.setState({password:b});
           document.getElementById('k1').style.display='block'

            setTimeout(() => {
                window.location.href='http://localhost:3000/LoginPage';
            }, 1500);
           
        }
        else{
            alert("Entered Email ID does not match with records.")
        }
    }
    
   

    render() {
        return (
            <React.Fragment>
                <br/>
                <div className="pass"> <br/>
                <h4>Kindly Enter your email id to receive password.</h4>
              Email ID :  <input type='email' name="email" onChange={(e)=>{this.setState({email:e.target.value})}} size='33' /> <br/><br/>
              <Button variant="primary" onClick={this.handleSubmit.bind(this)}>Click Here</Button>{' '} <br/>
                <div id='k1' className="c1">Your password is {this.state.password}.</div>
                </div>

              
            </React.Fragment>
        );
    }
}

export default ForgotPassword;