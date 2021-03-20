import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../header';

describe('Header', () => {
  afterEach(cleanup);
  
  it('renders without crashing', async () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('ida-logo')).toHaveAttribute('src');
  });

  it('matches snapshot header', () => { 
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

