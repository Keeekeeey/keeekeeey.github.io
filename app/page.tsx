"use client"

import { useState, useRef } from "react";

import TimerWidget from "./componets/Timer";
import WindowManager from "./componets/WindowManager";

export default function landingPage() {

return (
    <div className="border rounded w-full h-full ">
      <div className="border p-4 flex x-0 w-full
      bg-linear-180 from-white to-gray-500">
        <div className="ml-auto flex flex-row">
          <img className="max-h-8 max-w-8 px-1" src='https://cdn-icons-png.flaticon.com/128/3917/3917764.png'></img>
          <TimerWidget/>
        </div>
      </div>
      <div className="bg-cover h-96 min-w-20 min-h-150 bg-[url(https://images.pexels.com/photos/34314175/pexels-photo-34314175.jpeg)]">
        <WindowManager/>
      </div>
      <div className="border p-4 flex y-0 w-full h-full
       bg-linear-180 from-white to-gray-500">

        <img className="max-h-8 max-w-8 px-1" src='https://cdn-icons-png.flaticon.com/128/6424/6424314.png'></img>
        <img className="max-h-8 max-w-8 px-1" src='https://cdn-icons-png.flaticon.com/128/1231/1231223.png'></img>
       
       </div>
    </div>

    
  );
}