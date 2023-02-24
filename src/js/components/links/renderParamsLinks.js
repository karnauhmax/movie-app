import linksList from './linksList';
import createDynamicLinks from './createDynamicLinks';

const renderParamsLinks = () => {
  linksList.forEach(link => {
    const { page, className, params, parentSelector, text } = link;

    createDynamicLinks(page, className, params, parentSelector, text);
  });
};

export default renderParamsLinks;
