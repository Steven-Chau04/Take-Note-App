import React from 'react';
import { Button, Typography } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);
    console.log({res})
  };

  if (localStorage.getIterm('accessToken')) {
    //navigate('/');
    return <Navigate to='/' />;
  }
    

  return (
    <>
      <Typography variant='h5' sx={{ marginBottom: '10px' }}>
        Welcome to Note App
      </Typography>
      <Button variant='outlined' onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  );
}