import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import IDAApps from '../ida-apps';

describe('IDAApps', () => {
  afterEach(cleanup);
  
  it('renders without crashing', async () => {
    const { getByTestId } = render(<IDAApps />);
    expect(getByTestId('title')).toHaveTextContent('Onde você já pode usar o IDA?');
  });

  it('matches snapshot importance list', () => { 
    const tree = renderer.create(<IDAApps />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

