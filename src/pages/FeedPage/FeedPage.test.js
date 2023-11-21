import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeedPage from './FeedPage';

describe('<FeedPage />', () => {
  test('it should mount', () => {
    render(<FeedPage />);
    
    const feedPage = screen.getByTestId('FeedPage');

    expect(feedPage).toBeInTheDocument();
  });
});