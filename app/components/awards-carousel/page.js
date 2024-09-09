import React from 'react';
import Element from './element';
import TemplateNoCentre from '../element-template-nocentre';

const AwardsCarousel = () => {
  return (
    <div>
        <TemplateNoCentre heading={"Awards Carousel"} 
                  subtitle={"Awards Carousel to Display Various Awards Like in the Humane AI Pin Website"} 
                  element={<Element Award = {[
                    {
                      Brand: 'Tech Radar',
                      Award: 'Best of MWC',
                      Saying:
                        'This small wearable AI tech impressed us with a hands-free way to get answers and record video in a pin-ch.',
                    },
                    {
                      Brand: "Tom's Guide",
                      Award: 'Best AI Pin',
                      Saying:
                        'The basic idea behind the Humane Ai Pin is to get you to use your phones less so you can be more present, while still keeping you connected.',
                    },
                    {
                      Brand: 'Apple',
                      Award: 'Ultra Pro Max',
                      Saying:
                        'It demonstrates that you need a smartphone for most of the things we use a AI Pin for, freeing you to be more present in the moment and with other people.',
                    },
                    {
                      Brand: 'Samsung',
                      Award: "Editor's Choice",
                      Saying:
                        "There’s a futuristic air about the Humane Ai Pin that we can’t help but get excited about.",
                    },
                  ]}/>} 
                  tabcode={`import React from 'react'
import AwardsCarousel from '@/components/awards-carousel/awardscarousel'

const App = () => {
  return (
    <div>
      <AwardsCarousel Award = {[
                    {
                      Brand: 'Tech Radar',
                      Award: 'Best of MWC',
                      Saying:
                        'This small wearable AI tech impressed us with a hands-free way to get answers and record video in a pin-ch.',
                    },
                    {
                      Brand: "Tom's Guide",
                      Award: 'Best AI Pin',
                      Saying:
                        'The basic idea behind the Humane Ai Pin is to get you to use your phones less so you can be more present, while still keeping you connected.',
                    },
                    {
                      Brand: 'Apple',
                      Award: 'Ultra Pro Max',
                      Saying:
                        'It demonstrates that you need a smartphone for most of the things we use a AI Pin for, freeing you to be more present in the moment and with other people.',
                    },
                    {
                      Brand: 'Samsung',
                      Award: "Editor's Choice",
                      Saying:
                        'There’s a futuristic air about the Humane Ai Pin that we can’t help but get excited about.',
                    },
                  ]}/>
    </div>
  )
}

export default App`} 
                  dependencies={"npm i classnames framer-motion"} 
                  csscode={""} 
                  jsxcode={`'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const AwardsCarousel = ({ Award }) => {
  const [currents, setCurrents] = useState(0);
  const [currents2, setCurrents2] = useState(0)

  const onHoverStart = (index) => {
    changeStateGradually(currents, index);
  };

  const onHoverStart2 = (index) => {
    setCurrents2(index)
  };

  const changeStateGradually = (start, end) => {
    if (start === end) return;

    const step = start < end ? 1 : -1;
    let current = start;

    const interval = setInterval(() => {
      current += step;
      setCurrents(current);

      if (current === end) {
        clearInterval(interval);
      }
    }, 100); //
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex gap-x-14">
        {Award.map((award, index) => (
          <motion.div
            onMouseEnter={() => { onHoverStart2(index); onHoverStart(index); }}
            key={index}
            className="flex"
          >
            <div
              className={classNames(
                'flex transition-all duration-300',
                currents2 === index ? 'opacity-100' : 'opacity-25'
              )}
            >
              <Awards />
            </div>
            <div
              className={classNames(
                'text-sm flex flex-col justify-center items-center w-28',
                'transition-all duration-300',
                currents2 === index ? 'opacity-100' : 'opacity-25'
              )}
            >
              <h1 className="font-bold">{award.Brand}</h1>
              <h1>{award.Award}</h1>
            </div>
            <div
              className={classNames(
                'flex scale-x-[-1] transition-all duration-300',
                currents2 === index ? 'opacity-100' : 'opacity-25'
              )}
            >
              <Awards />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="overflow-hidden w-full pt-10" 
           style={{
              width: '100%',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 30%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
           }}
      >
        <motion.div
          className="flex w-full"
          animate={{ translateX: \`-\${currents * 100}%\` }}
          transition={{
            type: 'spring',
            stiffness: 505,
            damping: 35,
            mass: 1,
            bounce: 0.1,
          }}
        >
          {Award.map((award, index) => (
            <motion.div
              key={index}
              className={classNames(
                'flex-none w-full text-center text-xl px-48',
                currents === index ? 'opacity-100' : 'opacity-0 transition duration-75'
              )}
            >
              {award.Saying}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className='flex justify-center content-center mt-10 group [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_50%,rgba(0,0,0,1)_50%,rgba(0,0,0,0))]'>
      <motion.div
          className="flex w-full"
          animate={{ translateX: \`calc(47% - \${currents * 22}% - 0.75rem)\` }} 
          transition={{
            type: 'spring',
            stiffness: 505,
            damping: 35,
            mass: 1,
            bounce: 0.1,
          }}
      >
        {Award.map((image, index) => (
          <motion.div
            aria-current={currents === index} 
            key={index} 
            className={classNames(
            "w-2 h-2 mx-1 rounded-full transition-all",
            currents === index ? "bg-white w-4" : "bg-stone-500"
          )}>
          </motion.div>
        ))}
        </motion.div>
      </div>
    </div>
  );
};

const Awards = () => {
  return (
    <div className='h-max w-10'>
          <svg viewBox="0 0 17 24" className="invert">
            <path d="M11.3408 21.1946C12.5848 21.8886 13.8222 22.5826 15.0661 23.2766C15.4262 23.4795 15.7994 23.6629 16.2708 23.9116C15.3411 24.3241 12.6109 23.2831 9.86118 21.1553C7.99526 19.7084 6.46325 17.836 4.78065 16.1534C4.76756 16.029 4.76101 15.9046 4.74792 15.7867C3.48433 12.8667 3.15043 10.7127 3.60872 8.29688C3.73967 9.64557 3.7855 10.9877 4.02119 12.2971C4.39437 14.3987 5.35025 16.2581 6.77751 17.8491C7.07867 18.1895 7.51733 18.4056 7.89706 18.6805C8.00181 18.8115 8.10002 18.9424 8.20477 19.0668C9.1541 19.7215 10.0969 20.3762 11.0462 21.0309C11.1444 21.0899 11.2426 21.1422 11.3408 21.2012V21.1946Z"></path>
            <path d="M7.95681 0C7.79313 2.09506 6.37241 4.27524 4.35592 5.63048C3.42623 3.30627 5.08264 0.64816 7.95681 0Z"></path>
            <path d="M4.75412 15.7891C4.76722 15.9135 4.77377 16.0379 4.78686 16.1557C4.57735 16.2998 4.33511 16.6009 4.15834 16.5682C1.69664 16.123 0.531263 14.7023 0.354492 11.8281C1.76866 12.6334 2.98642 13.4583 3.82444 14.7939C4.06014 15.1737 4.44641 15.4618 4.76067 15.7957L4.75412 15.7891Z"></path>
            <path d="M1.65723 17.2109C4.02072 17.4532 5.88664 18.3305 7.37282 20.0065C5.21229 21.1392 3.14341 20.1506 1.65723 17.2109Z"></path>
            <path d="M11.3999 22.5513C8.57807 24.1226 7.09189 23.9262 4.9248 21.6806C7.19009 21.1896 9.27206 21.3205 11.3999 22.5513Z"></path>
            <path d="M2.93481 12.2319C0.381454 10.9683 -0.207783 9.53448 0.538584 6.39844C2.21463 8.03521 2.92827 9.9404 2.94136 12.2319H2.93481Z"></path>
            <path d="M3.05805 7.52187C1.04155 5.20421 0.982624 4.32036 2.54083 1.28906C3.65383 2.60502 3.86988 4.94888 3.06459 7.52187H3.05805Z"></path>
            <path d="M4.42773 7.99354C4.84675 5.45328 6.19544 4.41884 8.63095 4.80512C7.72746 6.53355 6.32639 7.46323 4.42773 7.99354Z"></path>
            <path d="M4.40706 12.0743C4.01424 9.38996 4.81953 8.1722 7.30741 7.64844C7.05208 9.57328 6.04383 10.922 4.40706 12.0743Z"></path>
            <path d="M11.3412 21.1934C11.243 21.1344 11.1448 21.0821 11.0466 21.0231C9.18064 19.131 9.10863 18.915 9.63239 16.6562C10.8632 17.2455 12.2119 19.5762 11.9893 20.8398C11.9631 20.9904 11.5638 21.0755 11.3412 21.1934Z"></path>
            <path d="M8.21101 19.0607C8.10625 18.9298 8.00805 18.7988 7.90329 18.6744C6.51532 16.5663 6.50877 15.5842 7.92294 13.7969C8.92464 15.4009 8.99011 17.077 8.61038 18.8185C8.58419 18.9232 8.3485 18.9822 8.21101 19.0607Z"></path>
            <path d="M5.72328 15.8126C4.45315 13.3313 4.81323 11.8058 6.84283 10.6797C7.18327 12.5456 6.94103 14.2151 5.72328 15.8126Z"></path>
          </svg>
      </div>
  )
}

export default AwardsCarousel`} 
                  jsxlocation={"components/awards-carousel/awardscarousel.jsx"} 
                  csslocation={""}
        />
    </div>
  );
};

export default AwardsCarousel;