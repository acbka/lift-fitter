import parse from "html-react-parser";
import { useParams } from "react-router";
import styled from "styled-components";
import { services } from "../common/constants";
import Layout from "../components/Layout";

const StyledImage = styled.img`
  padding: 24px;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 1170px;
  }
`;

const Paragraph = styled.div`
  padding: 24px;
  & > p {
    padding-bottom: 16px;
  }
`;

const ServiceInfo = () => {
  const { id } = useParams();

  const service = id ? services.find((item) => item.id === id) : undefined;

  return (
    <>
      {service && (
        <Layout pageTitle={service.title}>
          <StyledImage src={service.image} />
          <Paragraph>{parse(service.description || "")}</Paragraph>
        </Layout>
      )}
    </>
  );
};

export default ServiceInfo;
