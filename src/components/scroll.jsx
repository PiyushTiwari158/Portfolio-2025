const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "instant", block: "start" });
  }
};

export default handleScroll;
