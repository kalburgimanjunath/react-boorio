import React from 'react';
// import companyLogo from '../static/images/1.png';
export default function Banner() {
  return (
    <div
      style={{
        backgroundColor: '#523465',
        color: '#fff',
      }}
    >
      <img
        src={'https://picsum.photos/200/300'}
        width="800"
        height="300"
        style={{ opacity: 0.2 }}
      />
      <div
        style={{
          backgroundColor: '#26093c',
          width: '100%',
          height: '40px',
        }}
      ></div>
      <div style={{ margin: 20 }}>
        <div>
          <h3>
            Earn up to 500 Rs <span style={{ color: '#e2f55f' }}>BONUS!</span>
          </h3>
        </div>
        <div>
          Register to get referall code and refer your friends to earn in{' '}
          <span style={{ color: '#e2f55f' }}>$$$</span>
        </div>
        <button className="ternary-button">Create Account</button>
      </div>
    </div>
  );
}
