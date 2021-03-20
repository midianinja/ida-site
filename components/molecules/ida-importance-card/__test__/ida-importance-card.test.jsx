import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import IDAImportanceCard from '../ida-importance-card';

describe('IDAImportanceCard', () => {
  afterEach(cleanup);
  
  it('renders without crashing', async () => {
    const { getByTestId } = render(
      <IDAImportanceCard
        title="Test"
        iconSrc="/static/icon/ilustra-app-switch.svg"
        explanation="Test explanation about IDA"
      />
    );
    expect(getByTestId('icon-src')).toHaveAttribute('src');
  });

  it('matches snapshot card', () => { 
    const tree = renderer.create(
      <IDAImportanceCard
        title="Test"
        iconSrc="/static/icon/ilustra-app-switch.svg"
        explanation="Test explanation about IDA"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

