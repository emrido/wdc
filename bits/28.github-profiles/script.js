const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("User not found");
    }
    console.log(err);
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("Repos not found");
    }
    console.log(err);
  }
}

function createUserCard(user) {
  const { avatar_url, name, bio, followers, following, public_repos } = user;
  const cardHtml = `
  <div class="card">
    <div>
      <img src="${avatar_url}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${name}</h2>
        <p>${bio ? bio : ""}</p>

        <ul>
          <li>${followers} <strong>Followers</strong></li>
          <li>${following} <strong>Following</strong></li>
          <li>${public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos">
        </div>
    </div>
  </div>
  `;

  main.innerHTML = cardHtml;
}

function createErrorCard(message) {
  const cardHtml = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;

  main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");

    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
