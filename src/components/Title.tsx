import styled from "styled-components";

type TitleType = {
  bgImage?: string;
  icon?: string;
  pageTitle: string;
  hasSlider?: boolean;
};

const PageTitle = styled.div<{ $bgImage?: string; $hasSlider: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: ${({ $hasSlider }) => ($hasSlider ? "48px" : "144px")};
  background: ${({ $bgImage }) =>
    $bgImage
      ? `linear-gradient(rgba(32, 46, 49, 0.7), rgba(32, 46, 49, 1)),
    url(${$bgImage}) no-repeat center center/cover`
      : "var(--color-dark)"};
`;

const IconBlock = styled.div`
  display: inline-block;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translate(-100%, -50%);
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--color-white);
  }
  &::after {
    content: "";
    position: absolute;
    right: -110px;
    top: 50%;
    transform: translate(-100%, -50%);
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--color-white);
  }
`;

const Title = ({ bgImage, icon, pageTitle, hasSlider = false }: TitleType) => {
  return (
    <PageTitle $bgImage={bgImage} $hasSlider={hasSlider}>
      {icon && (
        <IconBlock>
          <img src={icon} alt={pageTitle} />
        </IconBlock>
      )}
      <h1>{pageTitle}</h1>
    </PageTitle>
  );
};

export default Title;
