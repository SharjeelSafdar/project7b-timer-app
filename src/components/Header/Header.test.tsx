import React from 'react';
import { render, cleanup } from '@testing-library/react'
import Header from './Header';

describe ('Tests for <Header /> Component', () => {
    afterEach(cleanup);

    it ('Renders "Timer App" title', () => {
        const { getByText } = render(<Header />);
        expect(getByText(/timer app/i)).toBeInTheDocument();
    })
})