import React from 'react';
import Search from './Search';
export default function Category() {
  const category = [
    'dices',
    'slots',
    'Table',
    'Live Games',
    'Faviorites',
    'Recently Played',
  ];
  return (
    <div
      style={{
        color: '#fff',
        backgroundColor: '#1f2430',
        padding: 12,
        border: '1px solid #1f2430',
        margin: '10px 20px',
      }}
    >
      <span
        style={{
          backgroundColor: '#252e42',
          padding: 10,
          borderRadius: 10,
          margin: 5,
        }}
      >
        All Games
      </span>
      {category.map((item) => {
        return <span style={{ padding: 10, margin: 5 }}>{item}</span>;
      })}
      <Search />
    </div>
  );
}
