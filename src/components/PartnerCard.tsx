import styled from "styled-components";
import type { PartnerType } from "../common/constants";

type PartnerCardType = {
  partner: PartnerType;
};

const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2e3d41;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  padding: 60px 20px 20px 20px;
  margin: 60px 0 5px 0;
  min-height: 140px;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (min-width: 1024px) {
    width: calc(33.333% - 20px);
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 12px 20px;
  border: 2px solid #2e3d41;
  border-radius: 20px;
  max-width: 90%;
`;

const Title = styled.h3`
  line-height: 1.6;
  font-weight: 400;
  word-wrap: break-word;
  word-break: normal;
  letter-spacing: 2px;
  font-size: 40px;
  text-transform: uppercase;
  transition: 0.25s;
`;

const PartnerCard = ({ partner }: PartnerCardType) => {
  return (
    <StyledCard href={partner.url} target="_blank">
      <Logo src={partner.logo} alt={partner.name} />
      <Title>{partner.name}</Title>
    </StyledCard>
  );
};

export default PartnerCard;
