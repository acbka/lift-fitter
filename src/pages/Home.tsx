import { useTranslation } from "react-i18next";
import home from "../assets/home.jpeg";
import homeIcon from "../assets/home.png";
import { sliders } from "../common/constants";
import { Section, StyledImage } from "../common/styles";
import Slider from "../components/Slider";
import Title from "../components/Title";

const Home = () => {
  const { t } = useTranslation("home");

  const sections = t(`sections`, {
    returnObjects: true,
  }) as { title: string; content: string }[];

  return (
    <>
      <Slider slides={sliders} />
      <Title pageTitle={t("title")} icon={homeIcon} hasSlider={true} />
      <Section>
        <StyledImage src={home} alt={t("teamAlt")} />
        {sections.map((section, idx) => (
          <section key={idx}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </section>
        ))}
      </Section>
    </>
  );
};

export default Home;
