'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

const TeamCarouselElement = ({ members }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(5);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    ref.current.style.setProperty(
      '--transition',
      '600ms cubic-bezier(0.22, 0.61, 0.36, 1)'
    );
  }, [current]);

  return (
    <div className="flex items-center justify-center w-full h-max md:px-10 p-5">
      <div className="min-w-full">
        <ul
          ref={ref}
          className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row overflow-hidden group md:h-96 rounded-xl"
        >
          {isMobile
            ? members.map((person, index) => (
                <div className="rounded-xl overflow-hidden relative" key={index}>
                  <Image
                    className="absolute max-w-none w-[350px] h-[380px] left-1/2 top-1/2 -translate-x-1/2 
                              -translate-y-1/2 object-cover rounded-xl mix-blend-multiply pointer-events-none
                              [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)] opacity-75"
                    width={350}
                    height={380}
                    src="/teamcarousel/gradient.png"
                    alt="Team Carousel UI Component"
                  />
                  <Image
                    className={classNames('w-full')}
                    width={350}
                    height={380}
                    src={person.image}
                    alt="Team Carousel UI Component"
                  />
                  <div
                    className={classNames(
                      'absolute bottom-8 left-5 text-3xl whitespace-nowrap [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)]',
                      'opacity-100'
                    )}
                  >
                    {person.name.split(' ').map((word, index) => (
                      <span key={index} className={classNames(index === 1 ? 'font-bold' : '')}>
                        {word}{' '}
                      </span>
                    ))}
                  </div>
                  <div
                    className={classNames(
                      'absolute bottom-5 left-5 text-xs whitespace-nowrap [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)]',
                      'opacity-75'
                    )}
                  >
                    {person.tag}
                  </div>
                </div>
              ))
            : members.map((person, index) => (
                <li
                  onClick={() => setCurrent(index)}
                  className={classNames(
                    'cursor-pointer w-[15%] p-2 relative [transition:width_var(--transition,200ms_ease-in-out)]',
                    'hover:w-[18%] [&:not([aria-current=true])]:group-hover:[&:not(:hover)]:w-[12%]',
                    '[&[aria-current=true]]:w-[50%] [&[aria-current=true]]:group-hover:w-[40%]',
                    'before:absolute before:bottom-0 before:top-0 before:left-[-8px] before:right-[-8px]',
                    'before:rounded-xl'
                  )}
                  aria-current={current === index}
                  key={index}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                      className={classNames(
                        'absolute max-w-none w-[350px] h-[380px] left-1/2 top-1/2 -translate-x-1/2',
                        '-translate-y-1/2 object-cover rounded-xl [transition:filter_600ms_cubic-bezier(0.22,0.61,0.36,1)]',
                        current === index ? '' : 'grayscale'
                      )}
                      width={350}
                      height={380}
                      src={person.image}
                      alt="Team Carousel UI Component"
                    />
                    {current === index && (
                      <Image
                        className="absolute max-w-none w-[350px] h-[380px] left-1/2 top-1/2 -translate-x-1/2 
                                  -translate-y-1/2 object-cover rounded-xl mix-blend-multiply pointer-events-none
                                  [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)] opacity-75"
                        width={350}
                        height={380}
                        src="/teamcarousel/gradient.png"
                        alt="Team Carousel UI Component"
                      />
                    )}
                  </div>
                  <div
                    className={classNames(
                      'absolute bottom-12 left-7 text-3xl whitespace-nowrap [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)]',
                      current === index ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    {person.name.split(' ').map((word, index) => (
                      <span key={index} className={classNames(index === 1 ? 'font-bold' : '')}>
                        {word}{' '}
                      </span>
                    ))}
                  </div>
                  <div
                    className={classNames(
                      'absolute bottom-8 left-8 text-xs whitespace-nowrap [transition:opacity_600ms_cubic-bezier(0.22,0.61,0.36,1)]',
                      current === index ? 'opacity-75' : 'opacity-0'
                    )}
                  >
                    {person.tag}
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCarouselElement;
