import React from "react";
import { useNavigate } from "react-router";
import servicesIcon from "../assets/services.png";
import servicesBg from "../assets/services-bg.jpg";
import { CardsContainer } from "../common/styles";
import { services } from "../common/constants";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";
import Layout from "../components/Layout";

const Services: React.FC = () => {
  const navigate = useNavigate();

  const showDetails = (id: string) => {
    navigate(`/service/${id}`);
  };

  return (
    <Layout pageTitle="Services" icon={servicesIcon} bgImage={servicesBg}>
      <CardsContainer>
        {services.map((service) => (
          <Card
            key={service.id}
            item={service}
            handleClick={() => showDetails(service.id as string)}
          ></Card>
        ))}
      </CardsContainer>
      <ContactSection />
    </Layout>
  );
};

export default Services;
