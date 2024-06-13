import React, {useState} from 'react'
import { LoginForm } from '../../components/login/Login.comp';

export const Entry = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChange = e =>{
        const {name, value} =e.target
        switch(name){
            case 'email':
                setEmail()
                break
            case 'password':
                setPassword()
                break

                default:
                    break
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault()
        
        if(!email || !password){
           return alert("Please enter your email and password.")
        }

        //TODO Call api to submit the form
        console.log(email,password);
    };

    return (
        <div className="entry-page bg-info">
            <h1 className="display-4 fw-bold">
                <LoginForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                email={email}
                pass={password}
                />
            </h1>
        </div>
    );
};