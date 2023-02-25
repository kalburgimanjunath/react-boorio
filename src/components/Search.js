import React, { useState } from 'react';
export default function Search() {
  const [searchItems, setValues] = useState([]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for games"
        style={{
          borderRadius: 5,
          border: '1px Solid #d6d6d6',
          fontSize: 14,
          paddingLeft: 20,
          width: '100%',
          minWidth: 280,
        }}
      />
    </div>
  );
}
