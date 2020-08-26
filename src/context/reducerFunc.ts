export const reducerFunc = (state: ReducerState, action: ReducerActions) => {
    switch(action.type) {
        case 'INCREASE_POMODORO_MINUTES':
            return {
                ...state,
                pomoMin: (state.pomoMin + 1) % 60,
            }
        case 'DECREASE_POMODORO_MINUTES':
            return {
                ...state,
                pomoMin: (state.pomoMin > 0) ? (state.pomoMin - 1) : 59,
            }
        case 'INCREASE_POMODORO_SECONDS':
            return {
                ...state,
                pomoSec: (state.pomoSec + 1) % 60,
                pomoMin: (state.pomoSec < 59) 
                    ? state.pomoMin 
                    : (state.pomoMin + 1) % 60
            }
        case 'DECREASE_POMODORO_SECONDS':
            return {
                ...state,
                pomoSec: (state.pomoSec > 0) ? (state.pomoSec - 1) : 59,
                pomoMin: (state.pomoSec > 0) 
                    ? state.pomoMin 
                    : (state.pomoMin > 0) ? (state.pomoMin - 1) : 59
            }
        case 'INCREASE_BREAK_MINUTES':
            return {
                ...state,
                breakMin: (state.breakMin + 1) % 60,
            }
        case 'DECREASE_BREAK_MINUTES':
            return {
                ...state,
                breakMin: (state.breakMin > 0) ? (state.breakMin - 1) : 59,
            }
        case 'INCREASE_BREAK_SECONDS':
            return {
                ...state,
                breakSec: (state.breakSec + 1) % 60,
                breakMin: (state.breakSec < 59) 
                    ? state.breakMin 
                    : (state.breakMin + 1) % 60
            }
        case 'DECREASE_BREAK_SECONDS':
            return {
                ...state,
                breakSec: (state.breakSec > 0) ? (state.breakSec - 1) : 59,
                breakMin: (state.breakSec > 0) 
                    ? state.breakMin 
                    : (state.breakMin > 0) ? (state.breakMin - 1) : 59
            }
        default:
            return state;
    }
}