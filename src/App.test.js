import { render } from '@testing-library/react';
import App from './App';

test('renders homepage', () => {
  render(<App />);
  expect(render(<App />)).toBeTruthy();
});
