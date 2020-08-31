import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('Tests for <App /> component', () => {
	afterEach(cleanup);

	test('Renders without crashing', () => {
		render(<App />);
	});
})
