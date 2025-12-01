import React from "react";
import styled from "styled-components";
import servicesIcon from "../assets/services.png";
import servicesBg from "../assets/services-bg.jpg";
import Layout from "../components/Layout";

const ServicesContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  padding: 30px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: "💪",
      title: "Personal Training",
      description:
        "One-on-one coaching tailored to your fitness goals and fitness level.",
    },
    {
      id: 2,
      icon: "📊",
      title: "Nutrition Planning",
      description:
        "Custom meal plans designed to support your training and health objectives.",
    },
    {
      id: 3,
      icon: "🏋️",
      title: "Group Classes",
      description:
        "High-energy group workouts designed for motivation and community.",
    },
  ];

  return (
    <Layout pageTitle="Services" icon={servicesIcon} bgImage={servicesBg}>
      <ServicesContainer>
        <Title>Our Services</Title>
        <ServiceGrid>
          {services.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServicesContainer>
    </Layout>
  );
};

export default Services;
