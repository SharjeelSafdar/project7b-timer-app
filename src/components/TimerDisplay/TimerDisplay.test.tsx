import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import TimerDisplay from './TimerDisplay';

const renderTimerDisplay = (props: Partial<TimerDisplayProps>) => {
    const defaultProps: TimerDisplayProps = {
        minutes: 0,
        seconds: 0,
        setMinutes: () => { return },
        setSeconds: () => { return },
        isRunning: false,
    }
    
    return render(<TimerDisplay {...defaultProps} {...props} />);
}

describe ('Tests for <DurationSetting /> Component', () => {
    afterEach(cleanup)

    it ('Renders without crashing', () => {
        renderTimerDisplay({});
    })

    it ('Displays the number of minutes and seconds passed to it', () => {
        const { getByTestId } = renderTimerDisplay({ minutes: 25, seconds: 59, });
        expect( getByTestId('minutes') ).toHaveTextContent('25');
        expect( getByTestId('seconds') ).toHaveTextContent('59');
    })

    it ('Appends zero to the left if minutes or seconds are less than 10', () => {
        const { getByTestId } = renderTimerDisplay({ minutes: 5, seconds: 8, });
        expect( getByTestId('minutes') ).toHaveTextContent('05');
        expect( getByTestId('seconds') ).toHaveTextContent('08');
    })

    
    it ('Shows up and down buttons if isRunning is false', () => {
        const { getByTestId } = renderTimerDisplay({ isRunning: false });
        expect( getByTestId('increaseMinutesBtn') ).toBeVisible();
        expect( getByTestId('decreaseMinutesBtn') ).toBeVisible();
        expect( getByTestId('increaseSecondsBtn') ).toBeVisible();
        expect( getByTestId('decreaseSecondsBtn') ).toBeVisible();
    })

    it ('Hides up and down buttons if isRunning is true', () => {
        const { getByTestId } = renderTimerDisplay({ isRunning: true });
        expect( getByTestId('increaseMinutesBtn') ).not.toBeVisible();
        expect( getByTestId('decreaseMinutesBtn') ).not.toBeVisible();
        expect( getByTestId('increaseSecondsBtn') ).not.toBeVisible();
        expect( getByTestId('decreaseSecondsBtn') ).not.toBeVisible();
    })

    it ('Calls setter functions when buttons are pressed', () => {
        const setMinutes = jest.fn();
        const setSeconds = jest.fn();
        const { getByTestId } = renderTimerDisplay({ setMinutes, setSeconds });

        fireEvent.click( getByTestId('increaseMinutesBtn') );
        expect(setMinutes).toHaveBeenCalled();
        fireEvent.click( getByTestId('decreaseMinutesBtn') );
        expect(setMinutes).toHaveBeenCalled();
        fireEvent.click( getByTestId('increaseSecondsBtn') );
        expect(setSeconds).toHaveBeenCalled();
        fireEvent.click( getByTestId('decreaseSecondsBtn') );
        expect(setSeconds).toHaveBeenCalled();
    })
})