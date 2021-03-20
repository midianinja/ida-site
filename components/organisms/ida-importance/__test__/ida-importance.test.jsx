import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import IDAImportance from '../ida-importance';

describe('IDAImportance', () => {
  afterEach(cleanup);
  
  it('renders without crashing', async () => {
    const { getAllByTestId } = render(<IDAImportance />);
    expect(getAllByTestId('icon-src').length).toEqual(4);
  });

  it('matches snapshot importance list', () => { 
    const tree = renderer.create(<IDAImportance />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

