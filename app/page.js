"use client"
import React from 'react'
import { useState, } from 'react';
import { useRouter } from 'next/navigation';
export default function withAuth(page) {
 
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('token', data.token);
                router.push('/Wifi'); // Replace with your protected page
            } else {
                setError(data.message);
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An error occurred. Please try again.');
        }
    };

  return (
    <div class="h-screen  flex justify-center items-center w-full  full-background-image">
     
    
        
    <form   onSubmit={handleSubmit}>
        <div class=" px-10 py-8 rounded-xl w-screen shadow-xl bg-black max-w-sm z-10 scale-down-center  fgik ">
            <div class="space-y-4">
                <h1 class="text-center text-2xl font-semibold text-whitey-600">VpnWan </h1>
                <hr/>
            <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input    type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                
                class="pl-2 outline-none border-none w-full"  placeholder="UserName"  required/>

            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
                <input  
                 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                class="pl-2 outline-none border-none w-full"  id="" placeholder="Password" required/>
                
            </div>
            </div>
            

            <button type="submit"  class="mt-6 w-full text-center  shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <hr/>
            
        </div>
        
    </form>
</div>
  )
}
