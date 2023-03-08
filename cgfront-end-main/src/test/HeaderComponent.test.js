import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { render, fireEvent, screen } from '@testing-library/react';


describe('HeaderComponent', () => {
  it('renders the navigation links', () => {
    render(<HeaderComponent />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('renders the logo with the correct text', () => {
    render(<HeaderComponent />);

    const logoElement = screen.getByText('CG-T');
    expect(logoElement).toBeInTheDocument();
    expect(logoElement.tagName).toBe('B');
  });

  test('toggles the navigation menu when the toggle button is clicked', () => {
    render(<HeaderComponent />);
    
    const toggleButton = screen.getByLabelText('Toggle navigation');
    fireEvent.click(toggleButton);
  
    expect(screen.queryByText('Home')).toBeVisible();
    expect(screen.queryByText('About')).toBeVisible();
    expect(screen.queryByText('Contact')).toBeVisible();
  });
  






  it('renders the navigation links', () => {
    render(<HeaderComponent />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });



  it('renders the navigation links', () => {
    render(<HeaderComponent />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

});
