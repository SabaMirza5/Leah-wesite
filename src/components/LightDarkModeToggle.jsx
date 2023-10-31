
import { useState } from 'react'
import { Switch } from '@headlessui/react'
import React, { useEffect } from "react";
import {FaAdjust } from 'react-icons/fa';

export default function LightDarkModeToggle() {
  const [enabled, setEnabled] = useState(false)
 // theme state
 const [theme, setTheme] = useState('light');

 // if local storage is empty save theme as light
 useEffect(() => {
   if (localStorage.getItem('theme') === null) {
     localStorage.setItem('theme', 'light');
   }
 }, []);

 useEffect(() => {
   const html = document.querySelector('html');
   //add or remove class dark in html elem according to theme in localstorage.
   if (localStorage.getItem('theme') === 'dark') {
     html.classList.add('dark');
     setTheme('dark');
   } else {
     html.classList.remove('dark');
     setTheme('light');
   }
 }, [theme]);

 // handle switch theme
 const handleThemeSwitch = () => {
   if (localStorage.getItem('theme') === 'light') {
     setTheme('dark');
     localStorage.setItem('theme', 'dark');
   } else {
     setTheme('light');
     localStorage.setItem('theme', 'light');
   }
 };
 
  return (
    <div className="md:ms-7 ms-0">
      <button  onClick={handleThemeSwitch}>
      <FaAdjust className='dark:text-gray-500'/>
        </button>
    </div>
  )
}
