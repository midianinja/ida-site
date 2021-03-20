import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import IDAAppCard from '../ida-app-card';

describe('IDAAppCard', () => {
  afterEach(cleanup);

  it('renders without crashing', async () => {
    const { getByTestId } = render(
      <IDAAppCard
        title="Test"
        imageSrc="/static/icon/ilustra-app-switch.svg"
        url="https://google.com.br"
      />
    );
    expect(getByTestId('image')).toHaveAttribute('src');
  });

  it('matches snapshot card', () => {
    const tree = renderer
      .create(
        <IDAAppCard
          title="Test"
          imageSrc="/static/icon/ilustra-app-switch.svg"
          url="https://google.com.br"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
