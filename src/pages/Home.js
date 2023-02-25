import React from 'react';
import { Header, Banner, Cards, Category } from '../components';
const BLUBS = () => {
  const blubs = ['Rackback system', 'Giveaways', 'Weekly bonus', 'Chat rain'];
  return (
    <div
      style={{
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {blubs.map((item, index) => {
        return (
          <div
            style={{
              backgroundColor: '#232832',
              margin: 20,
              padding: 20,
              borderRadius: 25,
              position: 'relative',
            }}
          >
            <div>
              <img
                src="https://reactjs.org/logo-og.png"
                alt="React Logo"
                width="100"
              />
            </div>
            <div style={{ textTransform: 'uppercase' }}>{item}</div>
            <div style={{ color: '#575d6d' }}>
              lorem text lorem text lorem text lorem text lorem text lorem text
              lorem text
            </div>
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 5,
                fontSize: 12,
                backgroundColor: '#414b61',
                borderRadius: 10,
                padding: 5,
              }}
            >
              vol{index + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default function Home({ GAMES }) {
  return (
    <div>
      <div className="row">
        <aside
          className="col-md-3"
          style={{ backgroundColor: '#232c3b', color: '#fff' }}
        >
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <button className="primary-button">Faviorites</button>
            </li>
            <li>
              <button className="secondary-button">Recently Played</button>
            </li>
          </ul>
          <ul>
            <li>GAMES</li>
            <li>SOCIAL</li>
            <li>TECHNOLOGY</li>
            <li>SUPPORT</li>
            <li>LANGUAGE</li>
          </ul>
          <div>
            <div>
              <span>Light</span>
              <span>Dark</span>
            </div>
            <div>Dark mode</div>
            <div>currency</div>
          </div>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </aside>
        <content className="col-md-9">
          <div style={{ backgroundColor: '#1e202b' }}>
            <Banner />
            <BLUBS />
            <Category />
            <Cards title="Popular games" data={GAMES} />
            <Cards title="New games" data={GAMES} />
            <Cards title="Promotions" data={GAMES} />
            <Cards title="All Games" data={GAMES} />
            <Cards title="Tournaments" data={GAMES} />
            <Cards title="Popular games" data={GAMES} />
            <Cards title="Popular games" data={GAMES} />
          </div>
        </content>
      </div>
    </div>
  );
}
