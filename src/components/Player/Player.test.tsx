import React from 'react';
import { render } from '@testing-library/react';
import Player from '../Player/Player';

describe ('Tests for <Player /> Component', () => {
    it ('Renders play, reset and git-repo buttons', () => {
        const { getByTestId } = render(<Player />)
        expect(getByTestId('startStopBtn')).toBeInTheDocument();
        expect(getByTestId('resetBtn')).toHaveAttribute('title', 'Reset Button');
        expect(getByTestId('gitBtn')).toHaveAttribute('title', 'Repository Link');
    })
})