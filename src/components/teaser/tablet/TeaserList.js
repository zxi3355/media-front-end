import React from 'react';
import Advertisement from '../../Advertisement';
import TeaserItem from './TeaserItem';
import '../TeaserList.common.scss';

const TeaserList = ({ teasers }) => {
  return (
    <div className='TeaserList'>
      <div className='TeaserList--teasers'>
        {teasers.map((teaser) => (
          <TeaserItem key={teaser.id} teaser={teaser} />
        ))}
      </div>
      <div className='TeaserList--ads'>
        <Advertisement />
      </div>
    </div>
  );
};

export default TeaserList;
