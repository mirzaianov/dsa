async function fetchNamesOfAllPublicRepos(username) {
  const perPage = 100;
  let nextPage = 1;
  let repoNames = [];

  while (nextPage !== null) {
    const { nextPage: nextPageNumber, repoNames: repoNamesForPage } = await fetchPageOfRepos(
      username,
      nextPage,
      perPage,
    );

    repoNames = [...repoNames, ...repoNamesForPage];
    nextPage = nextPageNumber;
  }

  return repoNames;
}

async function fetchPageOfRepos(username, page, perPage) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`,
  );

  if (!response.ok) {
    return {
      repoNames: [],
      nextPage: null,
    };
  }

  const nextPage = parseNextPage(response.headers.get('link') || '');
  const repos = await response.json();
  const repoNames = repos.map((repo) => repo.name);

  return {
    repoNames,
    nextPage,
  };
}

function parseNextPage(headerValue) {
  const parts = headerValue.split(',');
  const partThatHasNext = parts.find((part) => part.includes('rel="next"'));

  if (!partThatHasNext) return null;

  const nextPage = partThatHasNext.split(';')[0].trim();
  const match = nextPage.match(/page=(\d+)/);

  if (!match) return null;

  return match[1] || null;
}

export { fetchNamesOfAllPublicRepos };
