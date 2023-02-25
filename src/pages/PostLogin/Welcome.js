import React from 'react';
import { ListView } from '../../components';
import Offer from './Offer';
export default function Welcome({ data }) {
  return (
    <div>
      <h1>Welcome</h1>
      <>
        <Offer />
        <div>
          <h1>Get 200% for your first deposit right now!</h1>
          <p>
            Activate your bonus,make a minimum deposit of 100 TRY and get a 200%
            bonus to your first deposit.The minimum but for bonus wagering is
            10TRY.
          </p>
          <button>Deposit with no bonus</button>
          <button>Go on with bous</button>
        </div>
      </>
      <div>
        <h3>Check out the best GAMES!</h3>
        <div>
          <ListView data={data} header="false" />
        </div>
      </div>
    </div>
  );
}
