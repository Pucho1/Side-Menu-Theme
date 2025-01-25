
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Products from './Products';

describe("Products components", ()=> {
	it("should show title", ()=> {
		render(<Products />);

		expect(screen.getByText("Products")).toBeTruthy();
	});
});