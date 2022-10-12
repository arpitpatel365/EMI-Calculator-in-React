import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EMICalculator.css';
import Button from 'react-bootstrap/Button';



function EMICalculator() {
    const [userValues, setUserValues] = useState({
        Loan_Amount: "",
        ROI: "",
        Duration: ""
    });

    const [results, setResults] = useState({
        monthlyPayment: "",
        totalPayment: "",
        totalInterest: "",
        isResult: false
    });

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  



    useEffect(() => {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById("sign_up_form").style.display = 'none';
        document.getElementById("out").style.display = 'block';
        var a = localStorage.getItem('username');
        var b = localStorage.getItem('email');
        var c = localStorage.getItem('password');

        // console.log(a, b, c);
       
        
       
        
       


    })



    const handleChange = (e) => {
        setUserValues({ ...userValues, [e.target.name]: e.target.value })
    }


    const handleClick = () => {
        if (userValues.Loan_Amount === "") {
            window.alert("Please enter loan amount.")
        }

        else if (userValues.ROI === "") {
            window.alert("Please enter interest rate.")
        }

        else if (userValues.Duration === "") {
            window.alert("Please enter duration in months.")
        }

        else if (isNaN(userValues.Loan_Amount) || isNaN(userValues.ROI) || isNaN(userValues.Duration)) {
            window.alert("All the values must be a valid number.")
        }

        else if (Number(userValues.Loan_Amount <= 0) || Number(userValues.ROI <= 0) || Number(userValues.Duration <= 0)) {
            window.alert("All the values must be a positive number.")
        }

        else {

            toast('Calculating...', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });


            localStorage.setItem("Loan_Amount", userValues.Loan_Amount);
            localStorage.setItem("ROI", userValues.ROI)
            localStorage.setItem("Duration", userValues.Duration)
        }

        setTimeout(() => {
            calCulateResults(userValues)

        }, 1000);
    }




    const calCulateResults = (userValues) => {
        var a = localStorage.getItem("Loan_Amount")
        var b = localStorage.getItem("ROI")
        var c = localStorage.getItem("Duration")
        // console.log(a + " " + b + " " + c)
        const userPrincipal = Number(a);
        const userROI = Number(b) / 100 / 12;
        const userDuration = Number(c);
        // console.log(userPrincipal, userROI, userDuration);
        const x = Math.pow((1 + userROI), userDuration);
        // console.log(x)
        const monthly = (userPrincipal * x * userROI) / (x - 1);
        // console.log(monthly)


        if (isFinite(monthly)) {
            const calculatedMonthlyPayment = monthly.toFixed();
            const calculatedTotalPayment = (monthly * userDuration).toFixed()
            const calculatedTotalInterest = (monthly * userDuration - userPrincipal).toFixed();
            console.log(calculatedMonthlyPayment, calculatedTotalPayment, calculatedTotalInterest)

            setResults({
                monthlyPayment: calculatedMonthlyPayment,
                totalPayment: calculatedTotalPayment,
                totalInterest: calculatedTotalInterest,
                isResult: true
            })


        }
        return;


    }


    // amortization table calculation

    function fixedFloat(nbr, toFixed) {
        return parseFloat(nbr.toFixed(toFixed))
    }

    function calculateRepaymentAmount(a, n, i) {
        return ((i * a) / (1 - (1 + i) ** -n));
    }

    const rows = Math.ceil(userValues.Duration);
    const repaymentAmount = fixedFloat(
        calculateRepaymentAmount(
            userValues.Loan_Amount,
            userValues.Duration,
            userValues.ROI / 100 / 12
        )
    );

    let balance = userValues.Loan_Amount;
    // console.log(rows, repaymentAmount, balance)

    const handleReset = () => {

        setResults({
            monthlyPayment: "",
            totalPayment: "",
            totalInterest: "",
            isResult: true
        })
        setUserValues({
            Loan_Amount: "",
            ROI: "",
            Duration: ""
        })
    }







    return (
        <React.Fragment>

            <div>

                <br />
                {/* {!results.isResult? <div> */}


                <div className="calculator-form"> <br />
                    <center>
                        <h4>EMI Calculator</h4>

                        <input type='text' onChange={handleChange} name='Loan_Amount' placeholder="Loan amount" value={userValues.Loan_Amount} className='loan_amount' /> <br /><br />
                        <input type='text' onChange={handleChange} name='ROI' placeholder="Rate of interest per anum" value={userValues.ROI} className='roi' /> <br /><br />
                        <input type='text' onChange={handleChange} name='Duration' placeholder="Duration in months " value={userValues.Duration} className='duration' /> <br /> <br />
                        {/* <input type='button' onClick={handleClick} value='Calculate' /> */}
                        <Button variant="info" onClick={handleClick} id='b1'>Calculate Summary</Button>{' '}
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
                        />  <br />
                        <Button variant="danger" onClick={handleReset} id='b1'>Reset Values</Button>{' '}
                        <br /> <br /></center>
                </div>

                {/* </div> :  */}   <br />
                <div>
                    <div>
                        <div className="summary">
                            Loan Amount  <span className="l1"><span>&#8377;</span> {userValues.Loan_Amount}</span> <br />
                            Interest rate  <span className="l2">{userValues.ROI} % </span><br />
                            Duartion for repayment   <span className="l3">{userValues.Duration} months</span>  <br />  <br />

                            <h4>Repayment Summary</h4>
                            <label>Loan EMI   </label>
                            <input type='text' disabled value={results.monthlyPayment} className='n1' /> <br />
                            Total interest  <input type='text' disabled value={results.totalInterest} className='n2' /> <br />
                            Total payment (Principal + Interest)  <input type='text' disabled value={results.totalPayment} className='n3' /> <br /><br /></div>


                        <div className="emi">
                            <center>  <h4 className="h44">Monthly Break up for EMI</h4></center> <br />

                            <table>
                                <thead>
                                    <tr>
                                        <th>Installment No</th>
                                        <th>EMI Amount</th>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Balance Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!isNaN(rows) && [...new Array(rows)].map((__, index) => {
                                        const interest = fixedFloat((balance * userValues.ROI) / 100 / 12);
                                        const principal = fixedFloat(repaymentAmount - interest);
                                        balance = fixedFloat(balance - principal);
                                        console.log(interest, principal, balance);

                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{repaymentAmount}</td>
                                                <td>{principal}</td>
                                                <td>{interest}</td>
                                                <td>{balance}</td>
                                            </tr>
                                        );


                                    }
                                    )

                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                {/* } */}
            </div>
            {/* <button onClick={ok}>Click</button> */}
            <br />
        </React.Fragment>
    );
}

export default EMICalculator;


