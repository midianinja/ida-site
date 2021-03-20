import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import IDALogo from '../ida-logo';

describe('IDA Logo', () => {
  afterEach(cleanup);
  
  it('renders without crashing', async () => {
    const { getByTestId } = render(<IDALogo />);
    expect(getByTestId('ida-logo')).toHaveAttribute('src');
  });

  it('matches snapshot default button', () => { 
    const tree = renderer.create(<IDALogo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot big button', () => { 
    const tree = renderer.create(<IDALogo big />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

