async function fetchClosedPullRequests(username, repo) {
  const perPage = 100;

  let nextPage = 1;
  let repos = [];

  while (nextPage !== null) {
    const { nextPage: nextPageNumber, repos: reposPage } = await fetchPageOfClosedPullRequests(
      username,
      repo,
      nextPage,
      perPage,
    );

    repos = [...repos, ...reposPage];
    nextPage = nextPageNumber;
  }

  return repos.map((repo) => repo.id);
}

async function fetchPageOfClosedPullRequests(username, repo, page, perPage) {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${repo}/pulls?state=closed&page=${page}&per_page=${perPage}`,
  );

  if (!response.ok) {
    console.log(
      `Failed to fetch pull requests from repo=${repo} owned by ${username}, page=${page} and perPage=${perPage}`,
    );
    return {
      repos: [],
      nextPage: null,
    };
  }

  const nextPage = parseNextPage(response.headers.get('link') || '');
  const repos = await response.json();

  return {
    repos,
    nextPage,
  };
}

function parseNextPage(headerValue) {
  const parts = headerValue.split(',');
  const partThatHasNext = parts.find((part) => part.includes('rel="next"'));

  if (!partThatHasNext) {
    return null;
  }

  const nextPage = partThatHasNext.split(';')[0].trim();
  const match = nextPage.match(/page=(\d+)/);

  if (!match) {
    return null;
  }

  return match[1] || null;
}

export { fetchClosedPullRequests };
