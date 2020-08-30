import React, { useContext, useRef } from 'react';
import { GlobalContext } from './context';

export const StartTimer = () => {
    const { minutes, seconds, decreaseSeconds, resetTimer } = useContext(GlobalContext);
    let intervalId = useRef<NodeJS.Timeout | null>(null);

    intervalId.current = setInterval(() => {
        if (minutes > 0 || seconds > 0)
            decreaseSeconds && decreaseSeconds();
        else if (intervalId.current !== null) {
            clearInterval(intervalId.current)
            resetTimer && resetTimer()
        }
    }, 1000)

    return (<></>)
}