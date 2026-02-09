"use client"
import { useState } from 'react';
import DraggableWindow from './DraggableWindow';
import ProjectTable from '../pages/project-table';
import AboutMePage from '../pages/about-me';
import HomePage from '../pages/home-page';


interface Window {
  id: string;
  title: string;
  content: React.ReactNode;
  position: { x: number; y: number };
}

export default function WindowManager() {
  const [windows, setWindows] = useState<Window[]>([]);

  const addWindow = (title: string, content: React.ReactNode) => {
    const newWindow: Window = {
      id: `window-${Date.now()}`, 
      title,
      content,
      position: {
        x: windows.length * 30,
        y: windows.length * 30,
      }
    };
    
    setWindows([...windows, newWindow]);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  return (
    <div className="max-w-40 max-h-full">
      <div className="p-4 flex flex-col gap-2 text-black font-bold ">
        <button 
          onClick={() => addWindow('/ProjectTable', <ProjectTable/>)}
          className=" hover:cursor-pointer px-4 py-2 flex flex-col items-center">
            <img className = "max-h-10 max-w-10" src='https://cdn-icons-png.flaticon.com/128/10469/10469228.png'></img>
          My Projects
        </button>
        <button 
          onClick={() => addWindow('/AboutMe', <AboutMePage/>)}
          className=" hover:cursor-pointer px-4 py-2 flex flex-col items-center">
            <img className = "max-h-10 max-w-10" src='https://cdn-icons-png.flaticon.com/128/10469/10469228.png'></img>
          About Me
        </button>
        <button 
          onClick={() => addWindow('/HomePage', <HomePage/>)}
          className=" hover:cursor-pointer px-4 py-2 d flex flex-col items-center">
            <img className = "max-h-10 max-w-10" src='https://cdn-icons-png.flaticon.com/128/10469/10469228.png'></img>
          Home Page
        </button>
        <a href="https://docs.google.com/document/d/15v0Xzpo4t8l4ANTc3FjpkujUPwb9Fymqho-_yMLDHHM/edit?usp=sharing">
        <button className="  hover:cursor-pointer px-4 py-2 flex flex-col items-center">
            <img className = "max-h-10 max-w-10" src='https://cdn-icons-png.flaticon.com/128/9622/9622995.png'></img>
            My Resume - TEMP LINK
            </button>
        </a>
      </div>

      {windows.map((window) => (
        <DraggableWindow
          key={window.id}
          id={window.id}
          title={window.title}
          onClose={() => closeWindow(window.id)}
          defaultPosition={window.position}>
          {window.content}
        </DraggableWindow>
      ))}
    </div>
  );
}