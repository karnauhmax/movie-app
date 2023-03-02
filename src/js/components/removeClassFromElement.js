const removeClassFromElement = (element, className) => {
  if (element.classList.contains(className))
    element.classList.remove(className);
};

export default removeClassFromElement;
