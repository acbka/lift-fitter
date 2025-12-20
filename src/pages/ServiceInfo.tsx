import parse from "html-react-parser";
import { useParams } from "react-router";
import styled from "styled-components";
import { services } from "../common/constants";
import Layout from "../components/Layout";
import { Content } from "../common/styles";

const StyledImage = styled.img`
  padding: 24px 0;
  width: 100%;

  @media (min-width: 576px) {
    max-width: 1170px;
  }
`;

const Paragraph = styled.div`
  padding: 24px 0;
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
          <Content>
            <StyledImage src={service.image} />
            <Paragraph>{parse(service.description || "")}</Paragraph>
          </Content>
        </Layout>
      )}
    </>
  );
};

export default ServiceInfo;
