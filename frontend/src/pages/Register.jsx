import { Button, FormGroup, InputGroup} from '@blueprintjs/core'
import React, {useState} from 'react'

const Register = () => {

    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
    const {firstName, setFirstName} = useState('')
    const {lastName, setLastName} = useState('')

    return (
        <>
            <form className='auth-form'>
                <FormGroup label='First Name' labelFor='firstName'>
                    <InputGroup id='firstName' placeholder='First Name' type='text' value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                </FormGroup>
                <FormGroup label='Last Name' labelFor='lastName'>
                    <InputGroup id='lastName' placeholder='Last Name' type='text' value={lastName} onChange={e=>setLastName(e.target.value)}/>
                </FormGroup>
                <FormGroup label='Email' labelFor='email'>
                    <InputGroup id='email' placeholder='Email' type='email' value={email} onChange={e=>setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup label='Password' labelFor='password'>
                    <InputGroup id='password' placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                </FormGroup>
                <Button fill type="submit" text='Sign In'/>
            </form>
        </>
    )
}

export default Register