const UserLinks = {
  github: "pedroluca",
  instagram: "pe.uuh",
  youtube: "UC7qDaMEUS4MjhQ7UVxQQVMQ",
  twitter: "pedrolucaofc"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const socialMediaClass = li.getAttribute('class')

    li.children[0].href = `https://${socialMediaClass}.com/${UserLinks[socialMediaClass]}`
  }
}

changeSocialMediaLinks()

function getGitHubUserInformation() {
  const url = `https://api.github.com/users/${UserLinks.github}`

  fetch(url).then(response => response.json()).then(data => {
    userName.textContent = data.name
    bio.textContent = data.bio
    gitHubLink.href = data.html_url
    gitHubUserAvatar.src = data.avatar_url
    gitHubUsername.textContent = data.login
  })
}

getGitHubUserInformation()