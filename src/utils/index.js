function isVisible() {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  });

  return observer;
}

export default isVisible;
