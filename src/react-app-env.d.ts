/// <reference types="react-scripts" />

// Type(s) for Reducer State
type ReducerState = {
    minutes: number;
    seconds: number;
    isRunning: boolean;
}

// Type(s) for Reducer Actions
type IncreaseMinutes = {
    readonly type: 'INCREASE_MINUTES';
    readonly payload: null;
}
type DecreaseMinutes = {
    readonly type: 'DECREASE_MINUTES';
    readonly payload: null;
}
type IncreaseSeconds = {
    readonly type: 'INCREASE_SECONDS';
    readonly payload: null;
}
type DecreaseSeconds = {
    readonly type: 'DECREASE_SECONDS';
    readonly payload: null;
}
type ToggleIsRunning = {
    readonly type: 'TOGGLE_IS_RUNNING';
    readonly payload: null;
}
type ReducerActions = IncreaseMinutes | DecreaseMinutes | IncreaseSeconds | DecreaseSeconds | ToggleIsRunning

// Context Type
type ContextType = ReducerState & {
    increaseMinutes?: () => void;
    decreaseMinutes?: () => void;
    increaseSeconds?: () => void;
    decreaseSeconds?: () => void;
    toggleIsRunning?: () => void;
}
