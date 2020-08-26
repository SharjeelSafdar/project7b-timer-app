export const reducerFunc = (state: ReducerState, action: ReducerActions) => {
    switch(action.type) {
        case 'INCREASE_MINUTES':
            return {
                ...state,
                minutes: (state.minutes + 1) % 60,
            }
        case 'DECREASE_MINUTES':
            return {
                ...state,
                minutes: (state.minutes > 0) ? (state.minutes - 1) : 59,
            }
        case 'INCREASE_SECONDS':
            return {
                ...state,
                seconds: (state.seconds + 1) % 60,
                minutes: (state.seconds < 59) 
                    ? state.minutes 
                    : (state.minutes + 1) % 60,
            }
        case 'DECREASE_SECONDS':
            return {
                ...state,
                seconds: (state.seconds > 0) ? (state.seconds - 1) : 59,
                minutes: (state.seconds > 0) 
                    ? state.minutes 
                    : (state.minutes > 0) ? (state.minutes - 1) : 59,
            }
        default:
            return state;
    }
}