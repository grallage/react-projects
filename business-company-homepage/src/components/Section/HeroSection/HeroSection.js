import React, { useState } from "react";
import { UpworkButton } from "../../Button/ButtonElements";
import {
  HereImg,
  HeroBg,
  HeroBtnGroup,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroSectionElements";
import hereImg from "../../../images/hero3.jpg";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>build a website easily</HeroH1>
        <HeroP>
          Contact me and tell me what you want, I will give you the ideal
          website.
        </HeroP>
        <HeroBtnGroup>
          <UpworkButton
            href="https://www.upwork.com/freelancers/~01bcd3daa908688489"
            target="_blank"
          >
            contact me
          </UpworkButton>
        </HeroBtnGroup>
      </HeroContent>
      <HeroBg>
        <HereImg src={hereImg} />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
