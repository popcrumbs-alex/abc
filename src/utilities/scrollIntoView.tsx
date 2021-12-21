export const scrollIntoView = (section: any) => {
  if (section) {
    return section.scrollIntoView({ behavior: "smooth", start: "top" });
  }
};
