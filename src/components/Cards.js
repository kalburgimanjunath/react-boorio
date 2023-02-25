import React from 'react';
export const ListView = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
      {data &&
        data.map((item, index) => {
          return (
            <div style={{ padding: '10px' }}>
              <a href={`./item/:${index}`}>
                <div>
                  <img
                    src="https://picsum.photos/200"
                    style={{ width: 120, height: 80, borderRadius: 10 }}
                  />
                </div>
                {/* <a
                style={{
                  marginTop: '-70px',
                  marginLeft: '80px',
                  position: 'absolute',
                  color: 'white',
                }}
                href={`./item/:${item}`}
              >
                Play
              </a> */}
                <div
                  style={{
                    textTransform: 'uppercase',
                    color: '#636b7c',
                    textDecoration: 'none',
                    padding: 5,
                    fontSize: 14,
                  }}
                >
                  {item}
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
};
export default function Cards({ title, data, header }) {
  return (
    <div>
      <div
        style={{
          display: header == true ? 'flex' : 'none',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <h1 style={{ margin: 0, padding: 0 }}>{title}</h1>
        <div className="more">more</div>
      </div>
      <ListView data={data} />
    </div>
  );
}
