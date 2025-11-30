import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import { Brand } from "./Header";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: 64px 24px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
`;

const LogoImage = styled.img`
  width: 207px;
  height: auto;

  @media (min-width: 640px) {
    width: 207px;
  }
`;

const IconBlock = styled.div`
  display: flex;
  margin-top: 32px;
  align-items: center;
`;

const StyledIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--color-white);
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <Container>
          <Brand href="/" aria-label="Lift Fitter home">
            <LogoImage src={logo} alt="logo" />
          </Brand>
          <IconBlock>
            <StyledIcon src={phone} alt="phone" />
            <a href="tel:+48 737974401">+48 737974401</a>
          </IconBlock>
          <IconBlock>
            <StyledIcon src={email} alt="eemail" />
            <a href="mailto:info@liftfitter.com">info@liftfitter.com</a>
          </IconBlock>
        </Container>

        <Container>
          <div>
            <div>
              <h2>Quick links</h2>
            </div>

            <div>
              <IconButton
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.11 7.61 10.59.56.1.76-.24.76-.53v-1.86c-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .17 1.57-.75 1.57-.75.95-1.62 2.5-1.15 3.11-.88.1-.69.39-1.15.71-1.41-2.47-.28-5.07-1.24-5.07-5.53 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.41.11-2.94 0 0 .95-.31 3.12 1.14a10.8 10.8 0 012.84-.38c.96 0 1.93.13 2.84.38 2.17-1.45 3.12-1.14 3.12-1.14.61 1.53.23 2.66.11 2.94.72.78 1.16 1.78 1.16 3 0 4.3-2.61 5.24-5.09 5.52.4.35.75 1.04.75 2.1v3.11c0 .29.2.64.77.53 4.42-1.48 7.61-5.66 7.61-10.59C23.25 5.48 18.27.5 12 .5z" />
                </svg>
              </IconButton>

              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 001.84-2.31 8.34 8.34 0 01-2.66 1.02 4.18 4.18 0 00-7.12 3.81A11.86 11.86 0 013 4.8a4.18 4.18 0 001.29 5.58c-.66-.02-1.29-.2-1.84-.5v.05a4.18 4.18 0 003.35 4.1c-.32.08-.66.12-1.01.12-.25 0-.5-.02-.74-.07a4.19 4.19 0 003.9 2.9A8.38 8.38 0 012 19.54a11.82 11.82 0 006.29 1.84c7.55 0 11.69-6.26 11.69-11.69v-.53A8.36 8.36 0 0022.46 6z" />
                </svg>
              </IconButton>

              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.01A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.84v1.64h.05c.54-1.02 1.86-2.09 3.83-2.09 4.11 0 4.87 2.71 4.87 6.24V21H19v-5.25c0-1.25-.02-2.86-1.74-2.86-1.74 0-2.01 1.36-2.01 2.75V21h-4V9z" />
                </svg>
              </IconButton>
            </div>
          </div>
        </Container>
      </FooterContent>
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          textAlign: "center",
          opacity: 0.8,
        }}
      >
        <span>© {year} Lift Fitter. All rights reserved.</span>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
