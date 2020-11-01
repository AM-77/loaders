import React from 'react';

import loaders from './loaders';
import Loaders from './containers/Loaders/Loaders';
import NavBar from './containers/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Loaders loaders={loaders} />
    </div>
  );
}

export default App;
