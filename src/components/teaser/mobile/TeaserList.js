import React from 'react';
import Advertisement from '../../Advertisement';
import TeaserItem from './TeaserItem';
import './TeaserList.mobile.scss';

const TeaserList = ({ teasers }) => {
  return (
    <div className='TeaserListMobile'>
      <Advertisement />
      <div>
        {teasers.map((teaser) => (
          <TeaserItem key={teaser.id} teaser={teaser} />
        ))}
      </div>
    </div>
  );
};

export default TeaserList;
