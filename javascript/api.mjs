const userCardTemplate = document.querySelector("[data-user-template]")

fetch(`../api/search.json`)
    .then(response => response.json())
    .then( data => {
        const card = userCardTemplate.content.cloneNode()
        console.log(card)
    })