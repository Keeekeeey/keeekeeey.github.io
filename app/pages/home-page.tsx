"use client"

import WindowManager from "../componets/WindowManager";
import SkillsTable from "./about-me-skills-table";

export default function HomePage() {

return (
    <div className="w-full h-full overflow-y-auto sm:min-h-60 sm:min-w-60 lg:max-h-200 lg:max-w-250">
          <div className="basis-2/4 rounded p-2 bg-window-background ">
              <div className="p-4 min-h-120">
                 <p className="border font-bold bg-window-foreground p-2 lg:text-lg md:text-md">If you're looking for a problem solver, look no further!</p>
                  <div className="border min-w-90 min-h-95">
                    <div className="p-2">
                      <div className=" flex float-left mr-4 mb-4 max-h-90 max-w-90 border-4 rounded">
                          <img
                          src="https://i.pinimg.com/1200x/63/4d/7f/634d7f5c1adf3091dd8d7625545b3c94.jpg">
                          </img>
                      </div>
                      <p>I'm Kira Smith, a developer with a knack for building things that 
                        solve real problems. Whether it's training custom ML models, automating 
                        Maya pipelines, or creating procedural animation systems in Unity, 
                        I love tackling technical challenges that blend creativity with engineering.</p>
                      
                      <p>I studied at UT Dallas, worked with Koin Games and Apple, 
                        and I'm ready for the next challenge—maybe it could be yours!</p>
                      </div>

                      <div className="flex h-auto">
                       <SkillsTable/>
                      </div>
                    
                  </div>
                  <div className="flex justify-center items-center gap-2">
                  </div>
                  <div className="min-h-10 bg-[url(https://i.pinimg.com/736x/49/22/b7/4922b7524905b3e25d32a8aa50133280.jpg)]">
                  </div>
                  <div className="flex flex-row border bg-window-foreground min-h-5 p-5 px-10">
                    <div className="basis-2/4 ">
                    <p className="font-bold lg:text-lg md:text-md">Sound like a fit? </p>
                    <p> Contact me at:</p>
                      </div>
                      <div className="basis-2/4 ">
                      <div className="flex items-center gap-2 bg-foreground-0 rounded" >
                      <a href="https://github.com/Keeekeeey">
                      <button 
                        className="bg-window-foreground rounded p-2 transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="max-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
                      </button>
                      </a>
                      <a href="https://www.linkedin.com/in/kira-smith-rigging/">
                      <button 
                        className="bg-window-foreground rounded p-2 transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="mx-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png"></img>
                      </button>
                      </a>
                      <a href="email@kira.smith23480@gmail.com">
                      <button 
                        className="bg-window-foreground rounded p-2 transition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-accent">
                          <img className="mx-h-10 max-w-10" src="https://cdn-icons-png.flaticon.com/128/11502/11502370.png"></img>
                      </button>
                      </a>
                      </div>
                      
                      </div>
                  </div>
              </div>
          </div>
    </div>

    
  );
}