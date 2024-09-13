export const convertToLocalDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};
