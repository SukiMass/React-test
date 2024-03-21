import React, { useState } from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';



const Login = () => {

    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [apiuser, setApiUser] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleClick = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            setApiUser(data);
        }
        catch {
            setError(true);
        }
        setLoading(false);
    };

    function handleSubmit(){
        navigate("/Api");
    }
    return (
        <div className='container col-3 align-items-center  '>
            <h1>Login Page</h1>
            <span className='apiuser'>{apiuser.name}</span>

            <form>
                <input className='form-control' type="text" value={username} placeholder='username' onChange={e =>  setUsername(e.target.value) } />

                <input className='form-control' type="password" value={pass} placeholder='password' onChange={e => setPass(e.target.value) } />

                {loading ?
                <button className='btn btn-success' type='button'> Please Wait</button>
                :
                <button className='btn btn-success' type='button' onClick={handleClick} disabled={!username || !pass}>Login</button>

                }
                
                <button className='btn btn-primary' type='button' role='Navigate' onClick={handleSubmit}> Navigate</button>


                <span className='text-danger' data-testid="error" style={{ visibility: error ? "visible" : "hidden" }}>Something went Wrong</span>

            </form>

        </div>
    )
}

export default Login;