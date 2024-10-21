import React from "react";
import TemplateNoCentre from "../element-template-nocentre";
import Menu from "./element";

const AwardsCarousel = () => {
  return (
    <div>
      <TemplateNoCentre
        heading={""}
        subtitle={""}
        element={
          <Menu
            menuItems={[
              { text: "Home", href: "/" },
              { text: "About", href: "/" },
              { text: "Portfolio", href: "/" },
              { text: "Team", href: "/" },
              { text: "Contact", href: "/" },
            ]}
          />
        }
        tabcode={``}
        dependencies={""}
        csscode={""}
        jsxcode={``}
        jsxlocation={""}
        csslocation={""}
      />
    </div>
  );
};

export default AwardsCarousel;
