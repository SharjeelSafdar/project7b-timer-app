import React, { createContext, useReducer } from 'react';
import { reducerFunc } from './reducerFunc';

const initialState: ReducerState = {
    minutes: 0,
    seconds: 0,
    isRunning: false,
}

export const GlobalContext = createContext<ContextType>(initialState);

export const ContextProvider: React.FC<{}> = ({children}) => {
    const [ state, dispatch ] = useReducer<React.Reducer<ReducerState, ReducerActions>>(reducerFunc, initialState);

    const increaseMinutes = () => dispatch({type: 'INCREASE_MINUTES', payload: null})
    const decreaseMinutes = () => dispatch({type: 'DECREASE_MINUTES', payload: null})
    const increaseSeconds = () => dispatch({type: 'INCREASE_SECONDS', payload: null})
    const decreaseSeconds = () => dispatch({type: 'DECREASE_SECONDS', payload: null})
    const toggleIsRunning = () => dispatch({type: 'TOGGLE_IS_RUNNING', payload: null})

    return (
        <GlobalContext.Provider value={{
            ...state,
            increaseMinutes,
            decreaseMinutes,
            increaseSeconds,
            decreaseSeconds,
            toggleIsRunning,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}