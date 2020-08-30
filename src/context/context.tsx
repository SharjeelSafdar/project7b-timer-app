import React, { createContext, useReducer/* , useRef */ } from 'react';
import { reducerFunc } from './reducerFunc';

const initialState: ReducerState = {
    // minutesSetting: 0,
    // secondsSetting: 0,
    // minutesDisplay: 0,
    // secondsDisplay: 0,
    minutes: 0,
    seconds: 0,
    // previousMinutes: 0,
    // previousSeconds: 0,
    intervalId: null,
    isRunning: false,
}

export const GlobalContext = createContext<ContextType>(initialState);

export const ContextProvider: React.FC<{}> = ({children}) => {
    const [ state, dispatch ] = useReducer<React.Reducer<ReducerState, ReducerActions>>(reducerFunc, initialState);
    // let interval = useRef(setTimeout(() => (0),0));

    const increaseMinutes = () => dispatch({type: 'INCREASE_MINUTES', payload: null})
    const decreaseMinutes = () => dispatch({type: 'DECREASE_MINUTES', payload: null})
    const increaseSeconds = () => dispatch({type: 'INCREASE_SECONDS', payload: null})
    const decreaseSeconds = () => dispatch({type: 'DECREASE_SECONDS', payload: null})
    const toggleIsRunning = () => dispatch({type: 'TOGGLE_IS_RUNNING', payload: null})
    const stopTimer = () => dispatch({type: 'STOP_TIMER', payload: null})
    const resetTimer = () => dispatch({type: 'RESET_TIMER', payload: null})
    const startTimer = (getSecondsLeft: () => number) => {
        dispatch({type: 'START_TIMER', payload: { decreaseSeconds, resetTimer, getSecondsLeft }})
    }
    const getSeconds = () => (state.seconds + state.minutes * 60)

    return (
        <GlobalContext.Provider value={{
            ...state,
            increaseMinutes,
            decreaseMinutes,
            increaseSeconds,
            decreaseSeconds,
            toggleIsRunning,
            startTimer,
            stopTimer,
            resetTimer,
            getSeconds,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}