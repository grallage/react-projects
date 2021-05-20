import React from "react";
import { Button } from "../../Button/ButtonElements";
import {
  InfoContainer,
  InfoContent,
  InfoRow,
  Column1,
  Column1Content,
  TopLine,
  Heading,
  Subtitle,
  BtnGroup,
  Column2,
  Column2Content,
  Img,
} from "./InfoSectionElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoContent>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <Column1Content>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnGroup>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnGroup>
            </Column1Content>
          </Column1>
          <Column2>
            <Column2Content>
              <Img src={img} alt={alt} />
            </Column2Content>
          </Column2>
        </InfoRow>
      </InfoContent>
    </InfoContainer>
  );
};

export default InfoSection;
