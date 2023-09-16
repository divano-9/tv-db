const clearHtml = (text) => {
  const clear = text
    .replace('<p>', '')
    .replace('</p>', '')
    .replace('<b>', '')
    .replace('</b>', '');
  return clear;
};

export default clearHtml;
