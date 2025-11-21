const animation = new IntersectionAnimation((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
        }
    })
},
    {
    rootMargin: '0px',
    threshold: [0, 0.1, 1]
},
    )
const tags = document.querySelectorAll("body")

tags.forEach(() => {
    animation.observe(tags)
})