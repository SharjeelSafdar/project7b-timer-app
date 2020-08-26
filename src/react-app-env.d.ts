/// <reference types="react-scripts" />

// Type(s) for Reducer State
type ReducerState = {
    pomoMin: number;
    pomoSec: number;
    breakMin: number;
    breakSec: number;
}

// Type(s) for Reducer Actions
type IncreasePomoMin = {
    readonly type: 'INCREASE_POMODORO_MINUTES';
    readonly payload: null;
}
type DecreasePomoMin = {
    readonly type: 'DECREASE_POMODORO_MINUTES';
    readonly payload: null;
}
type IncreasePomoSec = {
    readonly type: 'INCREASE_POMODORO_SECONDS';
    readonly payload: null;
}
type DecreasePomoSec = {
    readonly type: 'DECREASE_POMODORO_SECONDS';
    readonly payload: null;
}
type IncreaseBreakMin = {
    readonly type: 'INCREASE_BREAK_MINUTES';
    readonly payload: null;
}
type DecreaseBreakMin = {
    readonly type: 'DECREASE_BREAK_MINUTES';
    readonly payload: null;
}
type IncreaseBreakSec = {
    readonly type: 'INCREASE_BREAK_SECONDS';
    readonly payload: null;
}
type DecreaseBreakSec = {
    readonly type: 'DECREASE_BREAK_SECONDS';
    readonly payload: null;
}
type ReducerActions = IncreasePomoMin | DecreasePomoMin | IncreasePomoSec | DecreasePomoSec |
                      IncreaseBreakMin | DecreaseBreakMin | IncreaseBreakSec | DecreaseBreakSec

// Context Type
type ContextType = ReducerState & {
    increasePomoMin?: () => void;
    decreasePomoMin?: () => void;
    increasePomoSec?: () => void;
    decreasePomoSec?: () => void;
    increaseBreakMin?: () => void;
    decreaseBreakMin?: () => void;
    increaseBreakSec?: () => void;
    decreaseBreakSec?: () => void;
}
