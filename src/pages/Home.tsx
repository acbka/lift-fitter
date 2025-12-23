import { useTranslation } from "react-i18next";
import home from "../assets/home.jpeg";
import homeIcon from "../assets/home.png";
import { sliders } from "../common/constants";
import { StyledImage, Content } from "../common/styles";
import Layout from "../components/PageLayout";

const Home = () => {
  const { t } = useTranslation("home");

  const sections = t(`sections`, {
    returnObjects: true,
  }) as { title: string; content: string }[];

  return (
    <Layout pageTitle={t("title")} icon={homeIcon} sliders={sliders}>
      <Content>
        <StyledImage src={home} alt={t("teamAlt")} />
        {sections.map((section, idx) => (
          <section key={idx}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </section>
        ))}
      </Content>
    </Layout>
  );
};

export default Home;
