import React from 'react';
import withAuth from '../components/withAuth';
import Internet from '../components/InternetStatus/Internet';
import Link from 'next/link';

function Nav() {
  return (
    <div>
<nav class="flex flex-wrap items-center justify-between p-3 bg-black">
    
    <img   style={{borderRadius:"20px"}} src="https://i.pinimg.com/originals/bd/2c/b5/bd2cb5e92e79cdf7b14253f56d058d47.gif" class="h-20 border-r-12 w-20" alt="ACME" width="120" />
    <div class="flex md:hidden">
        <button id="hamburger">
          <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
    </div>
    <div
        class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <Link href="/Wifi"> 
           <span class="block md:inline-block text-blue-900  hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Internet Status
       </span> </Link>

    <Link href="/WifiSet">   <a 
            class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Wifi Settings
        </a></Link> 
        <a href="#"
            class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Guest Network
        </a>
        <a href="#"
            class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Advanced Setting
        </a>
    </div>
    <a href="#"
        class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Logout
        

    </a>
</nav>


</div>

  );
}

export default  (Nav);
