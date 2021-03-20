import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import OutlineButton from '../outline-button';

describe('OutlineButton', () => {
  afterEach(cleanup);

  it('renders without crashing', async () => {
    const { getByTestId } = render(<OutlineButton onClick={() => {}}>Test!</OutlineButton>);

    expect(getByTestId('button')).toHaveTextContent('Test!');
  });

  it('matches snapshot default button', () => {
    const tree = renderer
      .create(<OutlineButton onClick={() => {}}>Default Test!</OutlineButton>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('click', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<OutlineButton onClick={mockOnClick}>Test!</OutlineButton>);
    
    userEvent.click(getByTestId('button'));
    expect(mockOnClick).toBeCalledTimes(1);
  });

  it('matches snapshot white button', () => {
    const tree = renderer
      .create(
        <OutlineButton
          color="white"
          onClick={() => {}}
        >
            White Test!
        </OutlineButton>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot small button', () => {
    const tree = renderer
      .create(
        <OutlineButton
          small
          onClick={() => {}}
        >
            Small Test!
        </OutlineButton>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
