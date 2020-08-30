export const reducerFunc = (state: ReducerState, action: ReducerActions) => {
    let newMinutes = 0;
    let newSeconds = 0;
    switch(action.type) {
        case 'INCREASE_MINUTES':
            newMinutes = (state.minutes + 1) % 60;
            return {
                ...state,
                minutes: newMinutes,
                // minutesDisplay: newMinutes,
            }
        case 'DECREASE_MINUTES':
            newSeconds = (state.minutes > 0) ? (state.minutes - 1) : 59;
            return {
                ...state,
                minutes: newSeconds,
                // minutesDisplay: newSeconds,
            }
        case 'INCREASE_SECONDS':
            newSeconds = (state.seconds + 1) % 60;
            newMinutes = (state.seconds < 59) 
                ? state.minutes 
                : (state.minutes + 1) % 60;
            return {
                ...state,
                seconds: newSeconds,
                minutes: newMinutes,
                // secondsDisplay: newSeconds,
                // minutesDisplay: newMinutes,
            }
        case 'DECREASE_SECONDS':
            newSeconds = (state.seconds > 0) ? (state.seconds - 1) : 59;
            newMinutes = (state.seconds > 0) 
                ? state.minutes 
                : (state.minutes > 0) ? (state.minutes - 1) : 59;
            return {
                ...state,
                seconds: newSeconds,
                minutes: newMinutes,
                // secondsDisplay: newSeconds,
                // minutesDisplay: newMinutes,
            }
        case 'TOGGLE_IS_RUNNING':
            return {
                ...state,
                isRunning: !state.isRunning,
            }
        case 'START_TIMER':
            if (state.isRunning || (state.minutes === 0 && state.seconds === 0))
                return state;
            return {
                ...state,
                // previousMinutes: state.minutes,
                // previousSeconds: state.seconds,
                isRunning: true,
                intervalId: setInterval( () => {
                    console.log(action.payload.getSecondsLeft())
                    if (action.payload.getSecondsLeft() > 0)
                        action.payload.decreaseSeconds();
                    else
                        action.payload.resetTimer();
                }, 1000),
            }
        case 'STOP_TIMER':
            if (state.intervalId !== null) {
                clearInterval(state.intervalId);
                return {
                    ...state,
                    isRunning: false,
                    intervalId: null,
                }
            }
            return state;
        case 'RESET_TIMER':
            if (state.intervalId !== null)
                clearInterval(state.intervalId);
            return {
                ...state,
                isRunning: false,
                intervalId: null,
                minutes: 0,
                seconds: 0,
            }
        default:
            return state;
    }
}