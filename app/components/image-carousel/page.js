import React from 'react'
import TemplateNoCentre from '../element-template-nocentre'
import Element from './element'

const TeamCarouselPage = () => {
  return (
    <div>
        <TemplateNoCentre heading={"Image Carousel"} 
                  subtitle={""} 
                  element={<Element Images = {[
                    "/carousel/1.jpg",
                    "/carousel/2.jpg",
                    "/carousel/3.jpg",
                    "/carousel/4.jpg",
                    "/carousel/5.jpg",
                    "/carousel/6.jpg"
                  ]} />} 
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

export default TeamCarouselPage