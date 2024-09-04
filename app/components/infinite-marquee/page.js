import React from 'react'
import Template from '../element-template'
import InfiniteMarquee from './element'

const infiniteMarqueeDocs = () => {
  return (
    <div>
        <Template heading={""} 
                  subtitle={""} 
                  element={ <InfiniteMarquee /> } 
                  tabcode={``} 
                  dependencies={""} 
                  csscode={""} 
                  jsxcode={``} 
                  jsxlocation={""} 
                  csslocation={""}
        />
    </div>
  )
}

export default infiniteMarqueeDocs