import { Link } from "react-router";
import styled from "styled-components";

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  z-index: 2;
`;

export const Section = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 48px;
`;


export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.8;
  padding: 0 24px;
  color: var(--color-gray);
  margin-bottom: 64px;
`;

export const StyledTitle = styled.h2`
  font-size: 30px;
  line-height: 39px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 32px;
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

export const Paragraph = styled.p`
  margin-bottom: 16px;
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
