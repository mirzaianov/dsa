async function fetchGitHubName(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) throw new Error(`Failed to fetch GitHub user: ${username}`);

    const data = await response.json();

    return data.name;
  } catch (error) {
    return null;
  }
}

export default fetchGitHubName;
