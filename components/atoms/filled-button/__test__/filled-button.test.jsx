import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import FilledButton from '../filled-button';

describe('FilledButton', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { getByTestId } = render(<FilledButton onClick={() => {}}>Test!</FilledButton>);
    expect(getByTestId('button')).toHaveTextContent('Test!');
  });

  it('click', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<FilledButton onClick={mockOnClick}>Test!</FilledButton>);
    
    userEvent.click(getByTestId('button'));
    expect(mockOnClick).toBeCalledTimes(1);
  });

  it('matches snapshot default button', () => {
    const tree = renderer
      .create(<FilledButton onClick={() => {}}>Default Test!</FilledButton>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot white button', () => {
    const tree = renderer
      .create(
        <FilledButton
          color="white"
          onClick={() => {}}
        >
            White Test!
        </FilledButton>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot small button', () => {
    const tree = renderer
      .create(
        <FilledButton
          small
          onClick={() => {}}
        >
            Small Test!
        </FilledButton>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
