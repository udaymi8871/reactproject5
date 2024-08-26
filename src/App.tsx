import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NiviReact from './uday';

function App() {
  const [college, setCollege] = useState<number>(0)
  return (
    <div>
      <p>kodnest</p>
      <NiviReact
        college={college}
        setCollege={setCollege}


      />

    </div>
  );
}

export default App;
