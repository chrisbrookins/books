import { render, screen } from '@testing-library/react';
import App from './App';

test('given the user views the initial app page, when the page loads, it will return a list of books from the google book api', () => {
  const {getByText} = render(<App />);
  expect(getByText('books')).toBeInTheDocument();
});
