"use client"
import { useState } from 'react';
import DraggableWindow from './DraggableWindow';
import ProjectTable from '../pages/project-table';
import AboutMePage from '../pages/about-me';


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
      <div className="p-4 flex flex-col gap-2">
        <button 
          onClick={() => addWindow('/ProjectTable', <ProjectTable/>)}
          className="px-4 py-2 bg-foreground-02 border rounded">
          My Projects
        </button>
        <button 
          onClick={() => addWindow('/AboutMe', <AboutMePage/>)}
          className="px-4 py-2 bg-foreground-02 border rounded">
          About Me
        </button>
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