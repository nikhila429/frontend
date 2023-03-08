import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPageComponent from '../components/LandingPageComponent';

describe('LandingPageComponent', () => {
  it('renders the main content', async () => {
    render(<LandingPageComponent />);
    expect(await screen.findByText('CG-Tournament')).toBeInTheDocument();
    expect(await screen.findByText(/ultimate platform/)).toBeInTheDocument();
  });
  it('renders the main content2', async () => {
    render(<LandingPageComponent />);
    expect(await screen.findByText('CG-Tournament')).toBeInTheDocument();
    expect(await screen.findByText(/ultimate platform/)).toBeInTheDocument();
  });







  it('renders the main content2', async () => {
    render(<LandingPageComponent />);
    expect(await screen.findByText('CG-Tournament')).toBeInTheDocument();
    expect(await screen.findByText(/ultimate platform/)).toBeInTheDocument();
  });
});
