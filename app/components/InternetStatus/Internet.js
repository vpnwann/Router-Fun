"use client"
import React from 'react'
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import 'react-responsive-modal/styles.css';


export default function Internet() {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
  return (
    <div>
        <div class="icon-bar">
  <a href="#ads"  onClick={onOpenModal} style={{position:"fixed"}}><i ></i>  <img   style={{borderRadius:"10px"}} className=' w-20' src='https://media4.giphy.com/media/JqmupuTVZYaQX5s094/giphy.gif?cid=6c09b952uzg530axivmug35p24o4nphyo1e8l56q56tc1qhz&ep=v1_gifs_search&rid=giphy.gif&ct=g'></img>  <p>Console</p></a>

 
</div>
      <h1 className=' ml-10 mt-12 font-bold text-6xl'>Internet Status</h1>

      <div class="font-[sans-serif] text-[#333]">
    <div class="max-w-5xl mx-auto">
      
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
        <div class="border rounded-md p-6">
            <img src='https://i.pinimg.com/736x/d0/40/bb/d040bb00c5d0d10ffc6bf5c9e119775d.jpg'></img>
         <p className=' text-center'>Internet</p>
        </div>
        <div class="border rounded-md p-6">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1Anw1lTThl9URjd-10Ms1iRXXV9Tdzqdjx4zroedf9uULdMHslvX7h_brG9AepVDfHM&usqp=CAU'></img>
           
          <div class="mt-6">
          <p className=' text-center'>Router</p>
           
          </div>
        
        </div>
        <div class="border rounded-md p-6">
          <h3 class="text-2xl font-semibold mb-1"></h3>
         
         
          <div class="mt-6">
          <img   className='h-20' src='https://banner2.cleanpng.com/20180723/jpe/kisspng-laptop-computer-icons-clip-art-icon-orang-5b561e1982d650.0350132815323704575359.jpg'></img>
            <h4 class="text-xl font-semibold mb-1">Online: 4</h4>
            <img className='h-20' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAABSUlK/v7/4+Pje3t78/Pxvb2+FhYUMDAwsLCzz8/Po6Oj6+vrV1dVcXFw1NTXNzc2zs7ONjY1hYWESEhIgICCYmJji4uJFRUXHx8e6urpwcHCnp6d8fHwmJiY+Pj6rq6s3NzednZ1LS0uRkZEaGhoVrMtJAAAEt0lEQVR4nO2d23qiMBRGC6goIAqoKBWUVuf9H3FGESUSDoGcnO9ftyWyVwkk2Ung6wsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDHn69WdjhRHUYHy2/bNI/WjL2kuzHuOAn/qDjir4swz1PWkq5jlHyLiIwTwTNKg1XRfBU19kKC44G7eEW5ZSta+d8YxlFMeBy4VsNMmYpm1aLGUlCAY5n9VKM8M5VdE4a6VtMlEaXBVNYhijI/pyQxgWELMNQDGLYBQz2AYRsLGGoBDNuAoR7AsA0Y6gEM24ChHsCwDRjqwRhDA4ZaIMnQCxJLFEngqTZMMjIbwJ+d3Tz3JdxwFgu2K5m7agxzSX43rtQ5XrGGnmnIZO3LNgzIFlMCoVzDb3lmT+ozoAINA0MFuTxDT54Vwfu9KM7wx1DE2+IeYYaymsE6thxDVXX0BllPRRnO5QnVWMkwdLfyhOoQoQgyDOXpUIgkGG7k6VA4iDd0T/J0aFRXL4kxnMqToWIJN7TkyVC5Cjf8lSdDJRNuGMmToVLt1ogxVNne34AhDGEIwzYWzmGTRVGU2Zf18N67roanTUok6D0/tNfdxT7F8JQFtKT10o8GpEM0NLx8N+Tkb5IJ80hFO0Mz6DjT1P5ow53VeIYX/uFzDYkB+SxJM3P9x9g6lyy1iJqbfqjhrpIYm8bvD5VTVKm/Xv/LqJHh5rlbys3P1CNO8asByahHaG34rKFu3NK8Z0/HvjVVG8Pf8vj8T/uBcZmp75k80MWwFNx3z6P+lPdjP0VNDOPHwf1yq0xH62HoPGbd+2Y8No/f7jNxrofhpTi0f4/sXNyMfR6o1S27Y3ZYkkX95aRk1sdwe39Crvr6/cO5K9IbFRL76xnLxCX/NMKQGXM/8dj61If9zO3dJjYg09AwGgd/jWs4zqNXdzAZCllLsomDvfcPP7WFzNApNlzn1c72xGK5S3ui1HBbX37n93muMKHSMKMuS+M9BcJkuON6asqCreIydvRZGWEy5Lpq9PX+F9cP8zDwnlfU4/qfZDLk+RwoBd287JUdngNDj+PtcGIy5LgcoZzSTInrFT3GxxwnXK+NNjRm/BqsIpfhvteKn8eEPLfzGM1JSyo+txPf2wmvfmMv7uoupcSI87DAbYHlbSjl0p5ci9tVZMyWNjPgXU/LmNcDNWoaj8xTTq3+LmKsoiWzOhrMrtGi4olqQ/EvrVJtaHeHCEMYwrCNcxrs/XDU+k2tDZ0yu+2N6NjrbHhwefyKxoYLotsxeF+YxoYZ8TODN05pbFiE5iXFFMHgAajGhob3ELtPNQ3ucutsuE2tIm9/TCym5RcfY8gHGMIQhjD8HwzVbSAtEJ/FyBUbzoUb8ksVD6O2ZZ07KncB36C9PYIzF6WCp4GpXxau3WEIRPyjVPUWyz7Lqkcj97UtJA7fBH4DiUJDti88DEbAUpieOHIEFTYYXZs3uJErEoy6Q+OFmu73qjswfhwVCB7kfnpq7FpQdlayv60le1+++DFFjemwHZLD2Kr5cljId31fC7/dwQjC2vBdXUhja4ZKvzflBr/HlSmKlR23v98TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwxl+701wRycuzeQAAAABJRU5ErkJggg=='></img>
            <p class="text-sm text-gray-500">Wifi Extender</p>
            
            </div>
        </div>
      </div>
    </div>
  </div>


  
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Wifi Name:</h2>
        <h3>Wifi Password</h3>
        <h4>Wan Status</h4>
      </Modal>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </div>
    
  )
}
