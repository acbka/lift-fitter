import { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LANGS, type Language } from "../i18n/i18n";
import Header from "./header/Header/Header";
import Footer from "./footer/Footer/Footer";

const Container = styled.div`
  background: var(--color-dark);
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
`;

const AppLayout = () => {
  const { lng } = useParams<{ lng: string }>();
  const { i18n, t } = useTranslation("common");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title = t("meta.title");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("common:meta.description"));
  }, [i18n.language, t]);

  useEffect(() => {
    const isSupported = LANGS.includes(lng as Language);
    if (!isSupported) {
      const newPath = pathname.replace(/^\/[^/]+/, "/en");
      navigate(newPath, { replace: true });
      return;
    }
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
      document.documentElement.lang = lng;
    }
  }, [lng, i18n, navigate, pathname]);

  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default AppLayout;
