import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';

const SignupForm: React.FC = () => {
  const [organisationName, setOrganisationName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, userPassword }),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }
      console.log('Sign-in successful');
      
      // Dialogue: After successful signin, first we will save the token in localStorage
      // localStorage.setItem('authToken', response.data.token);

    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      ...
      ...
      ...
    </form>
  );
};

export default SignupForm;
