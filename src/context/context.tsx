import React, { createContext, useReducer } from 'react';
import { reducerFunc } from './reducerFunc';

const initialState: ReducerState = {
    pomoMin: 25,
    pomoSec: 0,
    breakMin: 5,
    breakSec: 0,
}

export const GlobalContext = createContext<ContextType>(initialState);

export const ContextProvider: React.FC<{}> = ({children}) => {
    const [ state, dispatch ] = useReducer<React.Reducer<ReducerState, ReducerActions>>(reducerFunc, initialState);

    const increasePomoMin = () => dispatch({type: 'INCREASE_POMODORO_MINUTES', payload: null})
    const decreasePomoMin = () => dispatch({type: 'DECREASE_POMODORO_MINUTES', payload: null})
    const increasePomoSec = () => dispatch({type: 'INCREASE_POMODORO_SECONDS', payload: null})
    const decreasePomoSec = () => dispatch({type: 'DECREASE_POMODORO_SECONDS', payload: null})
    const increaseBreakMin = () => dispatch({type: 'INCREASE_BREAK_MINUTES', payload: null})
    const decreaseBreakMin = () => dispatch({type: 'DECREASE_BREAK_MINUTES', payload: null})
    const increaseBreakSec = () => dispatch({type: 'INCREASE_BREAK_SECONDS', payload: null})
    const decreaseBreakSec = () => dispatch({type: 'DECREASE_BREAK_SECONDS', payload: null})

    return (
        <GlobalContext.Provider value={{
            ...state,
            increasePomoMin,
            decreasePomoMin,
            increasePomoSec,
            decreasePomoSec,
            increaseBreakMin,
            decreaseBreakMin,
            increaseBreakSec,
            decreaseBreakSec,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}