import { Link } from "react-router";
import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  margin: 0 auto;
  line-height: 1.8;
  padding: 32px 24px;
  color: var(--color-gray);
  p {
    text-align: justify;
  }

  @media (min-width: 768px) {
    max-width: 1170px;
    p {
      text-align: left;
    }
  }
`;

export const TextSection = styled(Section)`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  z-index: 2;
`;

export const LogoImage = styled.img<{ $isScrolled?: boolean }>`
  height: 32px;
  width: auto;
  transition: width 0.3s ease;
  z-index: 20;

  @media (min-width: 375px) {
    height: 45px;
    width: auto;
  }

  @media (min-width: 992px) {
    height: ${({ $isScrolled }) => ($isScrolled ? "45px" : "65px")};
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  & > p {
    padding: 24px 0;
  }

  @media (min-width: 768px) {
    flex: 1;
    text-align: left;
    align-items: flex-start;

    & > h2 {
      padding: 0;
    }
  }
`;

export const StyledTitle = styled.h2`
  max-width: 550px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const StyledImage = styled.img`
  float: none;
  width: 100%;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    float: right;
    width: 45%;
    max-width: 500px;
    margin: 0 0 20px 40px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px 0;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  margin-bottom: 48px;
`;
