import React, { useState } from 'react';
// Dialogue 1: First we will import the API_ENDPOINT constant from the `config` folder
import { API_ENDPOINT } from '../../config/constants';

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Dialogue 2: Then we will define the handle submit function
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      console.log('Sign-in successful');
      
      // Dialogue: After successful signin we have to redirect the user to the secured page. We will do that later.

    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  };

  // Dialogue: Then we will use the handleSubmit function with our form
  return (
    <form onSubmit={handleSubmit}>
      ...
      ...
      ...
    </form>
  );
};

export default SigninForm;
