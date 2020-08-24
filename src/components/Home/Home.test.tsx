import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe ('Tests for <Home /> Component', () => {
    it ('Validate Layout', () => {
        const { getByText, getByTestId } = render( <Home /> );
        expect(getByText(/welcome/i)).toBeInTheDocument();
        expect(getByText(/select timer mode/i)).toBeInTheDocument();
        expect(getByTestId('pomoBtn')).toHaveTextContent('Pomodoro');
        expect(getByTestId('timerBtn')).toHaveTextContent('Timer');
        expect(getByTestId('stopwatchBtn')).toHaveTextContent('Stop Watch');
    })
})