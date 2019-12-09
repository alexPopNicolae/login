import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios  from 'axios';

const Login = (props) => {


    const axiosGitHubGraphQL = axios.create({
        baseURL: 'http://localhost:3030/graphql',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
      });

      const GET_USER = `{ 
          user {
            name
          } 
        }`;

    const [ username, setUserName ] = useState('');
    const [ password, setPassword] = useState('');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        props.history.push('/user-profile');
    }

    const goToRegister = () => {
        props.history.push('/register');
    }

    useEffect(() => {
       console.log('fa call la graph ql');
       axiosGitHubGraphQL.post('', {query: GET_USER}).then(res => {
           console.log('Asta este raspunsul meu!!');
           console.log(res.data);
       });
       
    }, []);

    return <div className='app'>
        <div className='wrapper'>
            <div className='input'>
                <TextField onChange={handleUserNameChange} label='Username' />
            </div>
            <div className='input'>
                <TextField onChange={handlePasswordChange} label='Password' />
            </div>
            <div>
                <Button onClick={handleLogin} variant='contained' color='primary'>Login</Button>
                <Button onClick={goToRegister} variant='contained' color='primary'>Register</Button>
            </div>
        </div>
    </div>
}
export default Login;