'use client'

import { useState } from "react";

import background from "../images/portfolio_background_lowres.jpg"

import ProjectTable from '../pages/project-table';
import AboutMePage from '../pages/about-me';
import HomePage from '../pages/home-page';


export default function MobileLandingPage(){
    let [homePageToggle,sethomePageToggle] = useState(true)
    let [abouteMeToggle,setabouteMeToggle] = useState(false)
    let [projectToggle,setprojectToggle] = useState(false)

    return(
        <div 
      style={{ '--bg-image': `url(${background.src})` } as React.CSSProperties}
      className=" bg-[image:var(--bg-image)] bg-cover bg-center">
        <div className="p-2 overflow-x-auto max-h-screen">
            <div className=" border-2 bg-window-background ">
                <div className="
                sticky bg-linear-180 from-window-header-light to-window-header-dark px-2">
                    <div className="pt-2">
                        <button
                        className="rounded p-2
                        bg-window-header-light "
                        onClick={() =>{
                            sethomePageToggle(true)
                            setabouteMeToggle(false)
                            setprojectToggle(false)
                        }}>
                            Home Page
                        </button>
                        <button
                        className=" rounded p-2
                        bg-window-header-light "
                        onClick={() =>{
                            sethomePageToggle(false)
                            setabouteMeToggle(true)
                            setprojectToggle(false)
                        }}>
                            About Me
                        </button>
                        <button
                        className=" rounded p-2
                        bg-window-header-light "
                        onClick={() =>{
                            sethomePageToggle(false)
                            setabouteMeToggle(false)
                            setprojectToggle(true)
                        }}>
                            My Projects
                        </button>
                        
                        <a href="https://docs.google.com/document/d/15v0Xzpo4t8l4ANTc3FjpkujUPwb9Fymqho-_yMLDHHM/edit?usp=sharing">
                            <button
                            className='p-3'>
                                <img 
                                className='ml-auto max-h-5 max-w-5'
                                src="https://cdn-icons-png.flaticon.com/128/10490/10490302.png"
                                alt="Close"/>
                            </button>
                        </a>
                    </div>
                    
                </div>
                {homePageToggle && <HomePage/>}
                {abouteMeToggle && <AboutMePage/>}
                {projectToggle && <ProjectTable/>}

            </div>

        </div>
      </div>
    )
}