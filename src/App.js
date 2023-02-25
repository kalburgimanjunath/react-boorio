import React from 'react';
import './style.css';
import { Header, Banner, Cards } from './components';
import { Routes, Route } from 'react-router-dom';
import { Home, Category, Game, Login, Register, Welcome } from './pages';
import { useParams } from 'react-router-dom';
import { GAMES } from './data/games';
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/category/*" element={<Category />}></Route>
        <Route path="/item/:gameId" element={<Game GAMES={GAMES} />}></Route>
        {/* <Route path="/item/:gameId" element={<Welcome GAMES={GAMES} />}></Route> */}
        <Route path="/*" exact element={<Home GAMES={GAMES} />}></Route>
      </Routes>

      <ul>
        <li>Search</li>
        <li>Footer</li>
      </ul>
    </div>
  );
}
