import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <SignIn />
    </div>
  );
};

export default SignInPage;