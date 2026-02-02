"use client"
import { useState } from 'react';
import DraggableWindow from './DraggableWindow';

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
    <div className="">
      <div className="p-4">
        <button 
          onClick={() => addWindow('/HomePage', <HomePage/>)}
          className="px-4 py-2 text-white border rounded">
          home
        </button>
        <button 
          onClick={() => addWindow('/ProjectTable', <div>words</div>)}
          className="px-4 py-2 text-white border rounded">
          table
        </button>
        <button 
          onClick={() => addWindow('/other', <div>stuff</div>)}
          className="px-4 py-2 text-white border rounded">
          ect
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