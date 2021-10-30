const linksSocialMedia = {
    github: 'israelfer',
    youtube: 'channel/UCwi-4fig-OyP1IbZkwvl3tA',
    facebook: 'israel.batista17',
    instagram: '_Israelbatista',
    twitter: '_Israelbatista'
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGithubProfile() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGithubProfile()