import React from 'react';
import './SignUp.scss';

function SignUp() {
    return (
        <div>
            <form>
                <div className='input_container'>
                    <input type='text' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                </div>
                <div className='button_container'>
                    <button type='submit' value='Log In'>Log In</button>
                    <button type='submit' value='Sign Up'>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
