import styled from "styled-components";

type GalleryType = {
  images: { image: string }[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

const NavButton = styled.button<{ $left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ $left }) => ($left ? "left: 24px;" : "right: 24px;")}
  transform: translateY(-50%);
  font-size: 48px;
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
`;

const Close = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 32px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const GalleryModal = ({ images, index, onClose, onChange }: GalleryType) => {
  const prev = () => onChange(index === 0 ? images.length - 1 : index - 1);

  const next = () => onChange(index === images.length - 1 ? 0 : index + 1);

  return (
    <Overlay onClick={onClose}>
      <Image src={images[index].image} onClick={(e) => e.stopPropagation()} />

      <NavButton
        $left
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        ‹
      </NavButton>

      <NavButton
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        ›
      </NavButton>

      <Close onClick={onClose}>✕</Close>
    </Overlay>
  );
};

export default GalleryModal;
