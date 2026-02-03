"use client"

import WindowManager from "../componets/WindowManager";

export default function HomePage() {

return (
    <div className="w-full h-full">
          <div className="basis-2/4 rounded p-2 bg-foreground-01">
              <div className="p-4 min-h-120">
                 <p className="font-bold rounded bg-foreground-02 p-2 ">If you're looking for a problem solver, look no further!</p>
                  <div className="grid grid-cols-2 gap-4 min-h-20">
                    <div className="p-1">
                      <p>My name is Kira Smith. I studied at the University of Texas at Dallas and have worked with Koin Games 
                        and Apple on various projects, and am looking 
                        for the next challenge to tackle. </p>
                      <p>Maybe it could be yours!</p>
                      </div>
                    <div>
                      <img
                      src="https://i.pinimg.com/736x/a6/70/62/a67062073c4089ef2b624fa3d411251e.jpg">
                      </img>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                  </div>
                  <div className="min-h-10 bg-[url(https://i.pinimg.com/1200x/04/c4/99/04c499e22cdf26db8a48f17372b04bb8.jpg)]">
                  </div>
                  <div className="rounded bg-foreground-02 min-h-5 p-5 px-10">
                    <p className="font-bold">Sound like a fit? </p>
                    <p> Contact me below!</p>
                    <div className="flex items-center gap-2 bg-foreground-0 rounded" >
                      <button 
                        className="bg-foreground-02 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                      </button>
                      <button 
                        className="bg-foreground-02 rounded p-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="mx-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"></img>
                      </button>
                      </div>
                  </div>
              </div>
          </div>
        <div className="basis-1/4 border-t bg-foreground-02 p-2"></div>
    </div>

    
  );
}