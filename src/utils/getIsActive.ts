export const getIsActive = (
  pathname: string,
  currentLang: string,
  link: string,
  exact?: boolean
): boolean => {
  const pathWithoutLang = pathname.replace(`/${currentLang}`, "");

  if (exact) {
    return pathWithoutLang === "" || pathWithoutLang === "/";
  }

  return pathWithoutLang.startsWith(`/${link}`) && link !== "";
};
