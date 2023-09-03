import React from 'react';

export const MediaGroup = ({ type, content, index }) => {
  const isMainImage = type === 'main';
  const imageSize = isMainImage ? 'main-image' : index === 0 ? 'first-aside-image' : 'second-aside-image';
  return (
    <div className={`section-${type}-group`}>
      <div className={`section-${type}-inner-group`}>
          <img src={content.source} alt={content.alt} className={imageSize} />
          <p className='text-size'>{content.description}</p>
      </div>
    </div>
  );
};
