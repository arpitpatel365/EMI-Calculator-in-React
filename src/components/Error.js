import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Error.css"

const Error = () => {
    let navigate=useNavigate();
    useEffect(()=>{
        
        document.getElementById('navbar1').style.display='none'
       
    })

    const handleClick=()=>{
            navigate('/LoginPage');
            
    }

    return (
        <React.Fragment>
            <br/>
            <h2 className='cc1'>Page not available !</h2>     <br/>
            <button onClick={handleClick} className='cc2'>Go Back</button>
        </React.Fragment>
    )
}

export default Error;

