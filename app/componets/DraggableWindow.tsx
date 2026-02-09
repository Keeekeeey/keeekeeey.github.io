"use client"
import React, { useRef } from 'react';
import Draggable from 'react-draggable';

interface DraggableWindowProps {
  id: string;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  defaultPosition?: { x: number; y: number };
}

export default function DraggableWindow({ 
  onClose, 
  children,
  title = "Window",
  defaultPosition = { x: 0, y: 0 }
}: DraggableWindowProps) {
  const nodeRef = useRef(null);

  return (
    <Draggable 
      nodeRef={nodeRef}
      defaultPosition={defaultPosition}
      handle=".drag-handle">
      <div 
        className="absolute min-h-60 min-w-60 bg-window-background rounded border-2" 
        ref={nodeRef}>
        <div 
          className="drag-handle grid 
          bg-linear-180 from-window-header-light to-window-header-dark gap-4 p-2 cursor-move" 
          style={{ gridTemplateColumns: '2fr 1fr' }}> 
          <div className="border rounded-2xl bg-background min-h-5 px-5 flex items-center"> 
            <span className="text-sm">{title}</span>
          </div>
          <button 
            onClick={onClose}
            className=" ml-auto flex flex-row rounded p-2 hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-accent">
            <img 
              className='max-h-5 max-w-5'
              src="https://cdn-icons-png.flaticon.com/128/10490/10490302.png"
              alt="Close"/>
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </Draggable>
  );
}