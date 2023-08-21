'use client'
import LoginForm from '@/components/LoginForm'
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

const LoginPage = () => {

  const router = useRouter()

  const { user, login } = useContext(UserContext)
  console.log(user)
  console.log(login)

  if(user != null || user != undefined){
    router.push('/')
  }

  return (
    <div className='dark:bg-black h-screen justify-center items-center flex'>
      <LoginForm />
    </div>
  )

};

export default LoginPage;
