import React from "react";
import Icon1 from "../../../images/svg-1.svg";
import Icon2 from "../../../images/svg-2.svg";
import Icon3 from "../../../images/svg-4.svg";
import Icon4 from "../../../images/svg-5.svg";
import {
  ServicesCard,
  ServicesH2,
  ServicesH1,
  ServicesIcon,
  ServicesContainer,
  ServicesContent,
  ServicesP,
} from "./ServicesElements";
const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>My Services</ServicesH1>
      <ServicesContent>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>UI design</ServicesH2>
          <ServicesP>I will use Sketch to design website.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Database</ServicesH2>
          <ServicesP>Mysql or Postgresql as you like.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>fronted</ServicesH2>
          <ServicesP>ReactJS will give you great performance.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>backend</ServicesH2>
          <ServicesP>Django is my first choice.</ServicesP>
        </ServicesCard>
      </ServicesContent>
    </ServicesContainer>
  );
};

export default ServicesSection;
