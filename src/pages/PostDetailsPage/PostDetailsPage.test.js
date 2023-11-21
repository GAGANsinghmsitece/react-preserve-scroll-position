import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostDetailsPage from './PostDetailsPage';

describe('<PostDetailsPage />', () => {
  test('it should mount', () => {
    render(<PostDetailsPage />);
    
    const postDetailsPage = screen.getByTestId('PostDetailsPage');

    expect(postDetailsPage).toBeInTheDocument();
  });
});