"use client"

import WindowManager from "../componets/WindowManager";

export default function HomePage() {

return (
    <div className="w-full h-full">
          <div className="basis-2/4 rounded p-2 bg-window-background ">
              <div className="p-4 min-h-120">
                 <p className="border font-bold rounded bg-window-foreground p-2 ">If you're looking for a problem solver, look no further!</p>
                  <div className="grid grid-cols-2 gap-4 min-h-20 border">
                    <div className="p-2">
                      <p>My name is Kira Smith. I studied at the University of Texas at Dallas and have worked with Koin Games 
                        and Apple on various projects, and am looking 
                        for the next challenge to tackle. </p>
                      <p>Maybe it could be yours!</p>
                      </div>
                    <div>
                      <img
                      src="https://i.pinimg.com/1200x/63/4d/7f/634d7f5c1adf3091dd8d7625545b3c94.jpg">
                      </img>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                  </div>
                  <div className="min-h-10 bg-[url(https://i.pinimg.com/736x/49/22/b7/4922b7524905b3e25d32a8aa50133280.jpg)]">
                  </div>
                  <div className="rounded border bg-window-foreground min-h-5 p-5 px-10">
                    <p className="font-bold">Sound like a fit? </p>
                    <p> Contact me below!</p>
                    <div className="flex items-center gap-2 bg-foreground-0 rounded" >
                      <button 
                        className="bg-window-foreground rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                      </button>
                      <button 
                        className="bg-window-foreground rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="mx-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"></img>
                      </button>
                      </div>
                  </div>
              </div>
          </div>
    </div>

    
  );
}