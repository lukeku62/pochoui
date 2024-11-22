export const formatDate = (date: Date, locale: string, dateStyle: "full" | "long" | "short") => {
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }
  return date.toLocaleDateString(locale, { dateStyle });
};
