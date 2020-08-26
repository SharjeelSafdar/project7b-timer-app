import React from 'react';
import { render } from '@testing-library/react';
import DurationSetting from './TimerDisplay';

describe ('Tests for <DurationSetting /> Component', () => {
    it ('Renders Correctly', () => {
        render(<DurationSetting />);
    })
})