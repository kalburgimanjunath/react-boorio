import React from 'react';
import GamePlayer from './GamePlayer';
export default function Dashboard({ game }) {
  return (
    <div>
      <GamePlayer game={game} />
    </div>
  );
}
