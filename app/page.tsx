"use client"

import { useState, useRef } from "react";

import TimerWidget from "./componets/Timer";
import WindowManager from "./componets/WindowManager";

import DraggableWindow from "./componets/DraggableWindow";

export default function landingPage() {

  

return (
    <div className="border rounded w-full h-full flex flex-col">
      <div className="border">
        <div className=" p-4 flex x-0 w-full
              bg-linear-180 from-white to-gray-500">
                <div className="ml-auto flex flex-row">
                  <img className="max-h-8 max-w-8 px-1" src='https://cdn-icons-png.flaticon.com/128/3917/3917764.png'></img>
                  <TimerWidget/>
                </div>
              </div>
      </div>
      <div className="border h-full bg-cover bg-[url(https://images.pexels.com/photos/34314175/pexels-photo-34314175.jpeg)]">
        <WindowManager/>
      </div>
      <div className="border bottom-0">
        <div className="p-4 flex w-full flex-rows justify-center items-center
              bg-linear-360 from-white to-gray-500">
                <img className="max-h-10 max-w-10 px-2" src='https://cdn-icons-png.flaticon.com/128/6424/6424314.png'></img>
                <img className="max-h-10 max-w-10 px-2" src='https://cdn-icons-png.flaticon.com/128/1231/1231223.png'></img>
                <div className="border rounded-2xl w-full bg-background min-h-5 max-w-100 px-5 flex items-center"> 
                  <span className="text-sm">text</span>
                </div>
                <img className="max-h-10 max-w-10 px-2" src="https://cdn-icons-png.flaticon.com/128/3917/3917061.png"></img>
              </div>       
      </div>
      
      
      
    </div>
    

    
  );
}