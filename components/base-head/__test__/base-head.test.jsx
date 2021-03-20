import React from 'react';
import { render } from '@testing-library/react';
import BaseHead from '../base-head';

describe('BaseHead', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = render(<BaseHead title="Testing" />);
    expect(getByTestId('base-head').tagName).toBe('DIV');
  });
});
