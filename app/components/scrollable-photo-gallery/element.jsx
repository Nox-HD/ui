'use client'
import React from 'react';

const Element = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.location.href = '/scrollable-photo-gallery/preview';
  };

  return (
    <div>
      <a href="/scrollable-photo-gallery/preview" onClick={handleLinkClick}>Link</a>
    </div>
  );
};

export default Element;
