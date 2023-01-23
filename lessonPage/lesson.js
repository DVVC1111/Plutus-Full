const courseCardTemplate = document.querySelector("[course-data-template]")
const courseCardContainer = document.querySelector("[course-card-container]")
const searchInput = document.querySelector("[course-search]")

let courses = [];

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    courses.forEach(info => {
        const isVisible = 
            info.title.toLowerCase().includes(value)
        info.element.classList.toggle("hide", !isVisible)
    })
})


fetch('/lesson.json')
    .then(res => res.json()).then(data =>{
        courses = data.map(info => {
            const card = courseCardTemplate.textContent.cloneNode(true).children[0]
            const title = card.querySelector("[data-title]")
            title.textContent = info.title
            courseCardContainer.append(card)
            return {title: info.title, element:card}
        })
    }) 