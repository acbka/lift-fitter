import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
  margin-bottom: 48px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const TextBlock = styled.div`
  line-height: 2em;
  text-align: justify;
  padding: 24px;
  width: 100%;

  @media (min-width: 576px) {
    flex: 1;
    text-align: left;
  }
`;

export const StyledImage = styled.img`
  overflow: hidden;
  display: block;
  margin: 0 24px;
  width: 100%;

  @media (min-width: 576px) {
    flex: 1;
    margin: 0 0 20px 20px;
  }
`;
