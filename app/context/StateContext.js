"use client"

import { createContext, useContext, useState, useCallback } from "react";
const StateContext = createContext();


export function StateProvider({ children }) {
    const [stateDict, setStateDict] = useState({});

    const addToArray = useCallback((componetId,item) => 
        {setStateDict(prev => ({
            ...prev,
            [componentId]: [...(prev[componentId] || []), item]
            }));
        }, []);
    
    const removeFromArray =  useCallback((componetId,index) => {
        {setStateDict(prev => ({
            ...prev,
            [componetId]:prev[componetId]?.filter((_,i) => i !== index) || []
        }))

        }
    })
}

