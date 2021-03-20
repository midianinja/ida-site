import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/index';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByTestId('ida')).toBeInTheDocument();
  });
});
