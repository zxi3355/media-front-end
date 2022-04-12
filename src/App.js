import React, { useState } from 'react';
import { TEASERS } from './utils/teasers';
import Header from './components/layout/Header';
// import Advertisement from './components/Advertisement';
import TeaserListDesktop from './components/teaser/desktop/TeaserList';
import TeaserListTablet from './components/teaser/tablet/TeaserList';
import TeaserListMobile from './components/teaser/mobile/TeaserList';
import { Desktop, Tablet, Mobile } from './utils/devices';

import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';

const App = () => {
  const [teasers, setTeasers] = useState(TEASERS.data);
  return (
    <div className='App'>
      <Header />
      <div className='App--content'>
        <Desktop>
          <TeaserListDesktop teasers={teasers} />
        </Desktop>
        <Tablet>
          <TeaserListTablet teasers={teasers} />
        </Tablet>
        <Mobile>
          <TeaserListMobile teasers={teasers} />
        </Mobile>
      </div>
    </div>
  );
};

export default App;
