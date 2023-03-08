import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TrnmtDash from '../components/TrnmtDash';

describe('TrnmtDash component', () => {
  const TId = 'tournament-id';
  const OId = 'owner-id';

  it('renders the component with expected links', () => {
    render(
      <BrowserRouter>
        <TrnmtDash TId={TId} OId={OId} />
      </BrowserRouter>
    );

    const ownerDashboardLink = screen.getByText(`Owner ID: ${OId} DashBoard`);
    expect(ownerDashboardLink).toBeInTheDocument();
    // expect(ownerDashboardLink.getAttribute('href')).toBe(`/admintdb?TId=${TId}&userId=${OId}`);

    const roundListLink = screen.getByText('Round List');
    expect(roundListLink).toBeInTheDocument();
    // expect(roundListLink.getAttribute('href')).toBe(`/roundlist?TId=${TId}&OId=${OId}`);

    const playerRequestListLink = screen.getByText('Player Request List');
    expect(playerRequestListLink).toBeInTheDocument();
    // expect(playerRequestListLink.getAttribute('href')).toBe(`/prqstlist?TId=${TId}&OId=${OId}`);

    const playerListLink = screen.getByText('Player List');
    expect(playerListLink).toBeInTheDocument();
    // expect(playerListLink.getAttribute('href')).toBe(`/playerlist?TId=${TId}&OId=${OId}`);
  });








  it('renders the component with expected links', () => {
    render(
      <BrowserRouter>
        <TrnmtDash TId={TId} OId={OId} />
      </BrowserRouter>
    );

    const ownerDashboardLink = screen.getByText(`Owner ID: ${OId} DashBoard`);
    expect(ownerDashboardLink).toBeInTheDocument();
    // expect(ownerDashboardLink.getAttribute('href')).toBe(`/admintdb?TId=${TId}&userId=${OId}`);

    const roundListLink = screen.getByText('Round List');
    expect(roundListLink).toBeInTheDocument();
    // expect(roundListLink.getAttribute('href')).toBe(`/roundlist?TId=${TId}&OId=${OId}`);

    const playerRequestListLink = screen.getByText('Player Request List');
    expect(playerRequestListLink).toBeInTheDocument();
    // expect(playerRequestListLink.getAttribute('href')).toBe(`/prqstlist?TId=${TId}&OId=${OId}`);

    const playerListLink = screen.getByText('Player List');
    expect(playerListLink).toBeInTheDocument();
    // expect(playerListLink.getAttribute('href')).toBe(`/playerlist?TId=${TId}&OId=${OId}`);
  });






  it('renders the component with expected links', () => {
    render(
      <BrowserRouter>
        <TrnmtDash TId={TId} OId={OId} />
      </BrowserRouter>
    );

    const ownerDashboardLink = screen.getByText(`Owner ID: ${OId} DashBoard`);
    expect(ownerDashboardLink).toBeInTheDocument();
    // expect(ownerDashboardLink.getAttribute('href')).toBe(`/admintdb?TId=${TId}&userId=${OId}`);

    const roundListLink = screen.getByText('Round List');
    expect(roundListLink).toBeInTheDocument();
    // expect(roundListLink.getAttribute('href')).toBe(`/roundlist?TId=${TId}&OId=${OId}`);

    const playerRequestListLink = screen.getByText('Player Request List');
    expect(playerRequestListLink).toBeInTheDocument();
    // expect(playerRequestListLink.getAttribute('href')).toBe(`/prqstlist?TId=${TId}&OId=${OId}`);

    const playerListLink = screen.getByText('Player List');
    expect(playerListLink).toBeInTheDocument();
    // expect(playerListLink.getAttribute('href')).toBe(`/playerlist?TId=${TId}&OId=${OId}`);
  });
});
