export const windowWidth = (): number => {
  let width = 0;

  if (typeof window !== undefined) {
    width = window.innerWidth;
  }

  return width;
};
