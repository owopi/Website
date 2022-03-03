const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-container]")

/* Api to get the faq */
fetch(`/api/search.json`)
    .then(response => response.json())
    .then( data => {
        search = data.map(faq => {
            /* clone card and give document fragment */
            const card = userCardTemplate.content.cloneNode(true).children[0]
            /* Find the data attributes of the two cards */
            const question = card.querySelector("[questions]")
            const answer = card.querySelector("[answers]")
            /* Change the text in them */
            question.textContent = faq.Header
            console.log(faq.id)
            answer.textContent = faq.Description_Content
            console.log(faq.Description_Content)
            /* Create a card for the content to fit in */
            userCardContainer.append(card)
            console.log(faq)
            return { question: faq.Header, description: faq.Description_Content, element: card}
        });
    })

    /* Search bar */

const inputBar = document.querySelector("[search]")

let search = [];
inputBar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    search.forEach(verification => {
            const isVisible = verification.question.toLowerCase().includes(value) ||  verification.description.toLowerCase().includes(value)
        /* If search bar contains a certain keyword and isVisible is true it does not hide card */
        verification.element.classList.toggle("hide", !isVisible)
    })
})

document.addEventListener("click", e => {
    console.log(e.target)
})