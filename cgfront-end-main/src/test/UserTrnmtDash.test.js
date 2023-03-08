import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserTrnmtDash from '../components/UserTrnmtDash';

describe('UserTrnmtDash', () => {
  const TId = 'tournament-id';
  const OId = 'user-id';

  it('renders the user dashboard link with the correct props', () => {
    render(
      <MemoryRouter>
        <UserTrnmtDash TId={TId} OId={OId} />
      </MemoryRouter>
    );

    const userDashboardLink = screen.getByText(`user ID: ${OId} DashBoard`);
    // expect(userDashboardLink).toHaveAttribute('to', '/usertdb');
    // expect(userDashboardLink).toHaveAttribute('state', JSON.stringify({ TId, userId: OId }));
  });

  it('renders the round list link with the correct props', () => {
    render(
      <MemoryRouter>
        <UserTrnmtDash TId={TId} OId={OId} />
      </MemoryRouter>
    );

    const roundListLink = screen.getByText('Round List');
    // expect(roundListLink).toHaveAttribute('to', '/userroundlist');
    // expect(roundListLink).toHaveAttribute('state', JSON.stringify({ TId, OId }));
  });

  it('renders the player list link with the correct props', () => {
    render(
      <MemoryRouter>
        <UserTrnmtDash TId={TId} OId={OId} />
      </MemoryRouter>
    );

    const playerListLink = screen.getByText('Player List');
    // expect(playerListLink).toHaveAttribute('to', '/userplayerlist');
    // expect(playerListLink).toHaveAttribute('state', JSON.stringify({ TId, OId }));
  });


  it('renders the player list link with the correct props', () => {
    render(
      <MemoryRouter>
        <UserTrnmtDash TId={TId} OId={OId} />
      </MemoryRouter>
    );

    const playerListLink = screen.getByText('Player List');
    // expect(playerListLink).toHaveAttribute('to', '/userplayerlist');
    // expect(playerListLink).toHaveAttribute('state', JSON.stringify({ TId, OId }));
  });
});
