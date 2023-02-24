const createDynamicLinks = (
  pageUrl,
  className,
  params,
  parentSelector,
  text
) => {
  let link = document.createElement('a');
  link.classList.add(className);
  link.innerText = text;

  const queryParams = new URLSearchParams(params);
  link.href = `${pageUrl}?${queryParams.toString()}`;

  if (document.querySelector(parentSelector)) {
    document.querySelector(parentSelector).appendChild(link);
  }
};

export default createDynamicLinks;
