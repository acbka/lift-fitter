import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";

type CardPropsType = {
  itemId: string;
  itemKey: string;
  image?: string;
  buttonName: string;
  handleClick?: () => void;
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  background: var(--color-white);
  border-radius: 20px;
  margin: 16px 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin: 0 0 8px 0;
  color: #111;
`;

const ShortDescription = styled.p`
  font-size: 1rem;
  color: var(--color-dark);
  margin-bottom: 20px;
`;

const Card = ({
  itemId,
  itemKey,
  image,
  buttonName,
  handleClick,
}: CardPropsType) => {
  const { t } = useTranslation("services");

  return (
    <StyledCard>
      <Image src={image} alt={t(`${itemKey}.${itemId}.title`)} />
      <CardBody>
        <div>
          <Title>{t(`${itemKey}.${itemId}.title`)}</Title>
          <ShortDescription>
            {t(`${itemKey}.${itemId}.shortDescription`)}
          </ShortDescription>
        </div>
        <Button title={buttonName} handleClick={handleClick} />
      </CardBody>
    </StyledCard>
  );
};

export default Card;
