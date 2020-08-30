/// <reference types="react-scripts" />

// Type(s) for Reducer State
type ReducerState = {
    // minutesSetting: number;
    // secondsSetting: number;
    // minutesDisplay: number;
    // secondsDisplay: number;
    minutes: number;
    seconds: number;
    // previousMinutes: number;
    // previousSeconds: number;
    isRunning: boolean;
    intervalId: NodeJS.Timeout | null;
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
type StartTimer = {
    readonly type: 'START_TIMER';
    readonly payload: {
        decreaseSeconds: () => void;
        resetTimer: () => void;
        getSecondsLeft: () => number;
    };
}
type StopTimer = {
    readonly type: 'STOP_TIMER';
    readonly payload: null;
}
type ResetTimer = {
    readonly type: 'RESET_TIMER';
    readonly payload: null;
}
type ReducerActions = IncreaseMinutes | DecreaseMinutes | IncreaseSeconds | DecreaseSeconds | 
                      ToggleIsRunning | StartTimer | StopTimer | ResetTimer

// Context Type
type ContextType = ReducerState & {
    increaseMinutes?: () => void;
    decreaseMinutes?: () => void;
    increaseSeconds?: () => void;
    decreaseSeconds?: () => void;
    toggleIsRunning?: () => void;
    startTimer?: (fn: () => number) => void;
    stopTimer?: () => void;
    resetTimer?: () => void;
    getSeconds?: () => number;
}


type TimerDisplayProps = {
    minutes: number;
    seconds: number;
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    isRunning: boolean;
}

type PlayerProps = {
    minutes: number;
    seconds: number;
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
    setMinutes: React.Dispatch<React.SetStateAction<number>>;
}