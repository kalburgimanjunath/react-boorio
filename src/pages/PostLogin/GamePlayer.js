import React from 'react';
export default function GamePlayer({ game }) {
  const Sidebar = () => {
    return (
      <div
        className="sidebar"
        style={{ flex: 1, borderRight: '1px Solid #d6d6d6', marginRight: 20 }}
      >
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Gifts</a>
          </li>
          <li>
            <a href="">Add</a>
          </li>
        </ul>
      </div>
    );
  };
  const Player = () => {
    return <div style={{ flex: 2 }}>Player IFrame:{game}</div>;
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-arround' }}>
      <Sidebar />
      {/* iframe here */}
      <Player />
    </div>
  );
}
