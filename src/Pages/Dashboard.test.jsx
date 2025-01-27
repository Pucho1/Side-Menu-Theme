import React from 'react';

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Dashboard from './Dashboard';

describe("Dashboard components", ()=> {
	it("should show title", ()=> {
		render(<Dashboard />);

		expect(screen.getByText("Dashboard")).toBeTruthy();
	});
});