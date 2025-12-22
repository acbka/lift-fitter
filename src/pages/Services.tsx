import React from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import servicesIcon from "../assets/services.png";
import servicesBg from "../assets/services-bg.jpg";
import { CardsContainer } from "../common/styles";
// import { services } from "../common/constants";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";
import { services } from "../common/services";

const Services: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["services", "common"]);

  const showDetails = (id: string) => {
    navigate(`/service/${id}`);
  };

  return (
    <Layout
      pageTitle={t("services.title")}
      icon={servicesIcon}
      bgImage={servicesBg}
    >
      <CardsContainer>
        {services.map((service) => (
          <Card
            key={service.id}
            image={service?.image}
            itemKey="services"
            itemId={service.id as string}
            buttonName={t("common:details")}
            handleClick={() => showDetails(service.id as string)}
          ></Card>
        ))}
      </CardsContainer>
      <ContactSection />
    </Layout>
  );
};

export default Services;
