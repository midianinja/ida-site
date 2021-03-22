import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../footer';

describe('Footer', () => {
  afterEach(cleanup);
  
  it('renders without crashing', async () => {
    const { getAllByTestId } = render(<Footer />);
    expect(getAllByTestId('maker-icon').length).toEqual(3);
  });

  it('matches snapshot dark footer', () => { 
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

