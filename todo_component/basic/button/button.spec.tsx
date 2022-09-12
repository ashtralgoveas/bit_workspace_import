import React from 'react';
import { render } from '@testing-library/react';
import { DarkButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<DarkButton />);
  const rendered = getByText('Hello world!');
  expect(rendered).toBeTruthy();
});
