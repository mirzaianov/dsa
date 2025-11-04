function simpleURLParser(route, url) {
  if (route === url) return true;

  const splittedRoute = route.split('/');
  const n = splittedRoute.length;
  const splittedURL = url.split('/');

  if (n !== splittedURL.length) return false;

  for (let i = 0; i < n; i += 1) {
    const routeItem = splittedRoute[i];
    const urlItem = splittedURL[i];
    const isInvalidURL = /[^a-zA-Z0-9-]/.test(urlItem);

    if (routeItem !== urlItem && isInvalidURL) return false;
  }

  return true;
}

export default simpleURLParser;
