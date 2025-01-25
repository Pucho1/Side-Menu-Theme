
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Home from './Home';


describe("Home components", ()=> {
	it("should show title", ()=> {
		render(<Home />);

		expect(screen.getByText(/Vite \+ React19 \+ Tailwind \+ MaterialUI/i)).toBeTruthy();
	});
});