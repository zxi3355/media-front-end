import React from 'react';
import '../TeaserItem.common.scss';

const TeaserItem = ({ teaser }) => {
  // {
  //   id: 'NOW-54531',
  //   url: 'https://www.nowtolove.com.au/royals/british-royal-family/the-queen-instagram-54531',
  //   source: "Australian Women's Weekly",
  //   contentTitle: 'Queen Elizabeth has Instagrammed for the first time',
  //   contentSummary: 'Yass Queen!',
  //   contentImageUrl:
  //     'http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/Now/2019/03/08/54531/Hero1.jpg',
  //   pageDateCreated: '2019-03-07T20:27:48.00Z',
  // },
  return (
    <div className='TeaserItem'>
      <div className='TeaserItem--content'>
        <div>
          <img
            className='TeaserItem--image'
            src={teaser.contentImageUrl}
            alt={teaser.contentSummary}
          />
        </div>
        <div>{teaser.contentTitle}</div>
        <div>{teaser.contentSummary}</div>
      </div>
    </div>
  );
};

export default TeaserItem;
