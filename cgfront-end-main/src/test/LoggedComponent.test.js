import React from 'react';
import { render, screen } from '@testing-library/react';
import LoggedComponent from '../components/LoggedComponent';

describe('LoggedComponent', () => {
  test('renders the component with the expected links', () => {
    render(<LoggedComponent />);

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();

    const signOutLink = screen.getByText('Sign Out');
    expect(signOutLink).toBeInTheDocument();
  });

  test('renders the component with the expected logo', () => {
    render(<LoggedComponent />);

    const logo = screen.getByText('CG-T');
    expect(logo).toBeInTheDocument();
  });








  test('renders the component with the expected links', () => {
    render(<LoggedComponent />);

    const signOutLink = screen.getByText('Sign Out');
    expect(signOutLink).toBeInTheDocument();
  });


  test('renders the component with the expected links', () => {
    render(<LoggedComponent />);

    const signOutLink = screen.getByText('Sign Out');
    expect(signOutLink).toBeInTheDocument();
  });









  test('renders the component with the expected links', () => {
    render(<LoggedComponent />);

    const signOutLink = screen.getByText('Sign Out');
    expect(signOutLink).toBeInTheDocument();
  });
  test('renders the component with the expected logo', () => {
    render(<LoggedComponent />);

    const logo = screen.getByText('CG-T');
    expect(logo).toBeInTheDocument();
  });
});
