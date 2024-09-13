export const getValidImages = (images) => {
  const validImages = images?.filter((image) => !image.includes("imgur"));
  return validImages;
};
