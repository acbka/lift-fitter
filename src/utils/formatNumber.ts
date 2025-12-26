export const formatNumber = (value: number, locale: string) => {
  if (value >= 1_000_000_000 && value % 1_000_000_000 === 0) {
    return `${value / 1_000_000_000}B`;
  }

  if (value >= 1_000_000 && value % 1_000_000 === 0) {
    return `${value / 1_000_000}M`;
  }

  if (value >= 1_000 && value % 1_000 === 0) {
    return `${value / 1_000}K`;
  }

  return new Intl.NumberFormat(locale).format(value);
};
