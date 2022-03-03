const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-container]")

/* Search bar */

let f_a_q = [];
const inputBar = document.getElementById("search");
inputBar.addEventListener("input", e => {
    const value = e.target.value;
    f_a_q.forEach(faq => {
        const isVisible = faq.question.includes(value) || faq.description.includes(value)
        faq.element.classList.toggle("hide", !isVisible)
    });
console.log(users)
})

/* Api to get the faq */
fetch("https://vlxtiykg.github.io/Api-for-page/api/search.json")
    .then(response => response.json())
    .then( data => {
        f_a_q = data.map(faq => {
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



document.addEventListener("click", e => {
    console.log(e.target)
})
