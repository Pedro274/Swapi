import React from 'react';
import './SignUp.scss';

function SignUp() {
    return (
        <div className='SignUp_container'>
            <div className='form_container'>
                <form>
                    <div className='input_container'>
                        <input type='text' placeholder='Email' required/>
                        <input type='password' placeholder='Password' required/>
                    </div>
                    <div className='button_container'>
                        <button type='submit' value='Log In'>Log In</button>
                        <button type='submit' value='Sign Up'>Sign Up</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default SignUp
