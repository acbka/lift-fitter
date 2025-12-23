import { useTranslation } from "react-i18next";
import styled from "styled-components";
import contactsIcon from "../assets/contacts.png";
import contactsBg from "../assets/contacts-bg.jpeg";
import location from "../assets/location.svg";
import mailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import ContactSection from "../components/ContactSection";
import Title from "../components/Title";

const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  max-width: 10170px;
  margin: 0 auto;
  padding: 48px 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoBlock = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  & > h2 {
    color: var(--color-dark);
    margin-bottom: 24px;
    text-align: center;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;

  img {
    width: 24px;
    margin-top: 4px;
  }

  h4 {
    margin: 0 0 4px 0;
    color: #2e3d41;
  }

  p {
    margin: 0;
    color: #555;
  }

  a {
    color: #555;
    text-decoration: none;
  }
`;

const Contacts = () => {
  const { t } = useTranslation("contacts");

  return (
    <>
      <Title pageTitle="Contacts" icon={contactsIcon} bgImage={contactsBg} />
      <ContactsWrap>
        <InfoBlock>
          <h2>{t("subtitle")}</h2>

          <InfoItem>
            <img src={phoneIcon} alt={t("phone.title")} />
            <div>
              <h4>{t("phone.title")}</h4>
              <p>(+48) 737974401</p>
            </div>
          </InfoItem>

          <InfoItem>
            <img src={mailIcon} alt={t("email.title")} />
            <div>
              <h4>{t("email.title")}</h4>
              <p>info@liftfitter.com</p>
            </div>
          </InfoItem>

          <InfoItem>
            <img src={location} alt={t("address.title")} />
            <div>
              <h4>{t("address.title")}</h4>
              <p>
                <a
                  href="https://maps.google.com/?q=ul.+Radogoska+9A/16,+71-607+Szczecin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("address.value")}
                </a>
              </p>
            </div>
          </InfoItem>

          <InfoItem>
            <div>
              <h4>{t("locations.title")}</h4>
              <p>{t("locations.value")}</p>
            </div>
          </InfoItem>
        </InfoBlock>
      </ContactsWrap>
      <ContactSection />
    </>
  );
};

export default Contacts;
