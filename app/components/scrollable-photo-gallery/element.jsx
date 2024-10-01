'use client'
import React from 'react';
import { Button } from '@/components/ui/button';

const Element = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.location.href = '/scrollable-photo-gallery/preview';
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <a href="/scrollable-photo-gallery/preview" onClick={handleLinkClick}><Button variant="outline">Preview</Button></a>
    </div>
  );
};

export default Element;
