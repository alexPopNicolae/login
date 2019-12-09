import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Register = (props) => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');

    const  handleChange = (e) => {
        switch(e.target.id) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default: break;
        }
    };


    const registerUser = () => {
        console.log('Incarca urmatorul user in baza de date');
        const user = {name, email, password };
        console.log(user);
        props.history.push('/user-profile');
    }

    return <div className='app'>
        <div className='wrapper'>

            <div className='input'>
                <TextField onChange={handleChange} id='name' label='Name' />
            </div>

            <div className='input'>
                <TextField onChange={handleChange} id='email' label='Email' />
            </div>

            <div className='input'>
                <TextField onChange={handleChange} id='password' label='Password' type='password' />
            </div>

            <div>
                <Button onClick={registerUser} variant='contained' color='primary'>Register</Button>
            </div>
        </div>
    </div>
}
export default Register;