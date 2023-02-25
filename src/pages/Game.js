import React from 'react';
import { useParams } from 'react-router-dom';
import Welcome from './PostLogin/Welcome';
import Offer from './PostLogin/Offer';
import Dashboard from './PostLogin/Dashboard';
export default function Game({ GAMES }) {
  const { gameId } = useParams();
  return (
    <div>
      {/* <Welcome data={GAMES} /> */}
      {/* <Offer /> */}

      <Dashboard game={gameId} />
    </div>
  );
}
