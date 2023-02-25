import React from 'react';
import { ListView } from '../components';
export default function CategoryPage({ GAMES }) {
  const types = [
    'All Games',
    'New Games',
    'Popular Games',
    'Table Games',
    'Live',
    'Jackpots',
    'Other Games',
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {types.map((item) => {
        return <span style={{ backgroundColor: '#b3b3b3b' }}>{item}</span>;
      })}
      {/* <ListView data={GAMES} /> */}
    </div>
  );
}
