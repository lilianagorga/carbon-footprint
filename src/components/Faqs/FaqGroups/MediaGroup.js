import React from 'react';

export const MediaGroup = ({ type, content }) => {
  return (
    <div className={`section-${type}-group`}>
      <div className={`section-${type}-inner-group`}>
        <div>
          <img src={content.source} alt={content.alt} />
          <p>{content.description}</p>
        </div>
      </div>
    </div>
  );
};
