/// <reference types="react-scripts" />

// Type(s) for Reducer State
type ReducerState = {
    minutes: number;
    seconds: number;
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
type ReducerActions = IncreaseMinutes | DecreaseMinutes | IncreaseSeconds | DecreaseSeconds

// Context Type
type ContextType = ReducerState & {
    increaseMinutes?: () => void;
    decreaseMinutes?: () => void;
    increaseSeconds?: () => void;
    decreaseSeconds?: () => void;
}
