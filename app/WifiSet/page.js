import React from 'react'

import Nav from '../components/Nav'

export default function page() {
  return (
    <div>
        <Nav/>
       
<h1 className=' text-6xl font-bold ml-8 mt-12'>Wifi Settings</h1>
<div class="container relative z-40 mx-auto mt-12">

    <div class="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img id='cv' src="https://t4.ftcdn.net/jpg/06/26/42/97/360_F_626429703_9YnX8lAbInGq7hXEzfzwcyV2OTLDYjxi.jpg" class="block mx-auto"/>

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    Wifi Name & Password
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img id='cv' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyHBsWrgsEDUl7c4xWIW9RaLcIcXyxlI65w&usqp=CAU" class="block mx-auto"/>

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    Channel & Bandwidth
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img  id='cv'src="https://w7.pngwing.com/pngs/607/275/png-transparent-computer-icons-cell-site-tower-aerials-symbol-miscellaneous-text-logo.png" class="block mx-auto"/>

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    AP Mode
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img id='cv' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmtHqoPAnKtnx_ME7jd2pEE4R_aePDaWCZQ&usqp=CAU" class="block mx-auto"/>

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    Wireless Repeating
                </p>
            </div>
        </a>

        <a href="#" class="block w-1/2 py-10 text-center border lg:w-1/4">
            <div>
                <img id='cv' src="https://e1.pngegg.com/pngimages/791/633/png-clipart-black-n-white-repeat-logo.png" class="block mx-auto"/>

                <p class="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    WPS
                </p>
            </div>
        </a>

    

    </div>

</div>
     
    </div>
  )
}
