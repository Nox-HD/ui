import React from 'react'
import Template from '../element-template'
import TeamCarouselElement from './element'

const TeamCarouselPage = () => {
  return (
    <div>
        <Template heading={"Team Carousel"} 
                  subtitle={"Beautiful carousel to mention team members as in Stripe Sessions page"} 
                  element={<TeamCarouselElement />} 
                  tabcode={""} 
                  dependencies={""} 
                  csscode={""} 
                  jsxcode={""} 
                  jsxlocation={""} 
                  csslocation={""}
        />
    </div>
  )
}

export default TeamCarouselPage