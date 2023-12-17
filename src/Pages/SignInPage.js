import React from 'react';
import SignInComponent from '../Components/SignInComponent';

function SignInPage(props) {
    return (
        <div className='absolute 
                top-2/4 left-2/4
                translate-x-[-50%]
                translate-y-[-50%]'>
            <SignInComponent/>
        </div>
    );
}

export default SignInPage;