import React from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './sign-page.styles.scss';

const SignPage = () => {

  return (
    <div className='sign-in-and-sign-up'>
      <div className='sign-in'>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignPage;
