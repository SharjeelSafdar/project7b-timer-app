import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Player from './Player';

const renderPlayer = (props: Partial<PlayerProps>) => {
    const defaultProps: PlayerProps = {
        minutes: 0,
        seconds: 0,
        isRunning: false,
        setMinutes: () => {},
        setSeconds: () => {},
        setIsRunning: () => {},
    }
    
    return render(<Player {...defaultProps} {...props} />);
}

describe ('Tests for <Player /> Component', () => {
    afterEach(cleanup);

    it ('Renders play, reset and git-repo buttons', () => {
        const { getByTestId } = renderPlayer({});
        expect(getByTestId('startStopBtn')).toBeInTheDocument();
        expect(getByTestId('resetBtn')).toHaveAttribute('title', 'Reset Timer');
        expect(getByTestId('gitBtn')).toHaveAttribute('title', 'Repository Link');
    })

    it ("Doesn't call setIsRunning when start/stop button is clicked, but timer is zero", () => {
        const setIsRunning = jest.fn();
        const { getByTestId } = renderPlayer({ setIsRunning });

        const startStopBtn = getByTestId('startStopBtn');
        fireEvent.click(startStopBtn);
        expect(setIsRunning).not.toHaveBeenCalled();
    })

    it ("Calls setIsRunning when start/stop button is clicked with non-zero timer", () => {
        const setIsRunning = jest.fn();
        const { getByTestId } = renderPlayer({ setIsRunning, seconds: 4 });

        const startStopBtn = getByTestId('startStopBtn');
        fireEvent.click(startStopBtn);
        expect(setIsRunning).toHaveBeenCalled();

        fireEvent.click(startStopBtn);
        expect(setIsRunning).toHaveBeenCalled();
    })

    it ('Calls setIsRunning, setMinutes and setIsSeconds when reset button is clicked', () => {
        const setIsRunning = jest.fn();
        const setMinutes = jest.fn();
        const setSeconds = jest.fn();
        const { getByTestId } = renderPlayer({ setIsRunning, setMinutes, setSeconds });

        fireEvent.click(getByTestId('resetBtn'))
        expect(setIsRunning).toHaveBeenCalled();
        expect(setMinutes).toHaveBeenCalled();
        expect(setSeconds).toHaveBeenCalled();
    })

    it ('Git Repo link is correct', () => {
        const { getByTestId } = renderPlayer({});
        const gitLink = getByTestId('gitLink');

        expect( gitLink ).toBeInTheDocument();
        expect( gitLink ).toHaveAttribute('href', 'https://github.com/SharjeelSafdar/project7b-timer-app');
        expect( gitLink ).toHaveAttribute('target', '_blank');
        expect( gitLink ).toHaveAttribute('rel', 'noopener noreferrer');
    })
})