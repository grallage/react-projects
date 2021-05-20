import styled from "styled-components";
// import heroImage from "../../../images/hero3.jpg";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;

  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;
export const HeroBg = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HereImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  vertical-align: bottom;

  @media screen and (max-width: 700px) {
    object-fit: contain;
  }
`;
export const HeroContent = styled.div`
  background: white;
  height: 100%;

  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;

  color: black;

  padding: 24px 36px;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 50%;
    margin: 80px auto;
  }
`;

export const HeroH1 = styled.h1`
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
  font-size: 3rem;

  @media screen and (max-width: 760) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 480) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  /* text-transform: capitalize; */

  margin-top: 24px;
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 760) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480) {
    font-size: 1.1rem;
  }
`;

export const HeroBtnGroup = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
