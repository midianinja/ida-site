import React from 'react';
import { render } from '@testing-library/react';
import BaseHead from '../base-head';

describe('base head tests', () => {
  it('renders without crashing', () => {
    const { debug } = render(<BaseHead title="Testing" />, {
      container: document.head,
    });

    debug();
  });
});
