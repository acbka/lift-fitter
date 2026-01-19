import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import Slider from "./Slider/Slider";
import type { SlideType } from "../common/constants";

type CardPropsType = {
  buttonName: string;
  galleryImages?: SlideType[];
  image?: string;
  itemId: string;
  pageKey: string;
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
`;

const Image = styled.img`
  width: 100%;
  height: 270px;
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
  galleryImages,
  itemId,
  pageKey,
  image,
  buttonName,
  handleClick,
}: CardPropsType) => {
  const { t } = useTranslation(pageKey);

  return (
    <StyledCard>
      {galleryImages ? (
        <Slider
          slides={galleryImages}
          width="360px"
          height="270px"
          showArrows={false}
          autoplay={true}
        />
      ) : (
        <Image src={image} alt={t(`${pageKey}.${itemId}.title`)} />
      )}
      <CardBody>
        <div>
          <Title>{t(`${pageKey}.${itemId}.title`)}</Title>
          <ShortDescription>
            {t(`${pageKey}.${itemId}.shortDescription`)}
          </ShortDescription>
        </div>
        <Button title={buttonName} handleClick={handleClick} />
      </CardBody>
    </StyledCard>
  );
};

export default Card;
