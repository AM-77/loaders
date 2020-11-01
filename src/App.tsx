import React, { useState } from 'react';

import allLoaders from './loaders';
import Loaders from './containers/Loaders/Loaders';
import NavBar from './containers/NavBar/NavBar';
import ILoader from './types/ILoader';
import ITag from './types/ITag';

function App() {
  const [loaders, setLoaders] = useState<ILoader[]>(allLoaders);

  const filterLoaders = (tags: ITag[]) => {
    const filtered: ILoader[] = [];
    let isFilter: boolean = false;

    for (let i = 0; i < tags.length; i += 1) {
      if (tags[i].selected) {
        isFilter = true;
        break;
      }
    }

    if (isFilter) {
      allLoaders.forEach((loader: ILoader) => {
        for (let i = 0; i < tags.length; i += 1) {
          if (tags[i].selected && loader.tags.indexOf(tags[i].name) > -1) {
            filtered.push(loader);
            break;
          }
        }
      });
      setLoaders(filtered);
    } else {
      setLoaders(allLoaders);
    }
  };

  return (
    <div className="App">
      <NavBar filterLoaders={filterLoaders} />
      <Loaders loaders={loaders} />
    </div>
  );
}

export default App;
