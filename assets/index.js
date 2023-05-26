let education = [
    {
        id: 1,
        year: 2023,
        institution: "Life Choices Coding Academy",
        description: "Latest Education"
    },
    {
        id: 2, 
        year: 2020,
        institution: "Cape Peninsula University of Technology",
        description: "Tertiary Education",
    },
    {
        id: 3,
        year: 2017,
        institution: "Mondale High School",
        description: "Secondary Education",
    }
]

let educationCard = document.querySelector(".education");
education.forEach((data) => {
    educationCard.innerHTML += `
    <div class= "card">
    <h4 class= "display-4">${data.year}</h4>
    <div class= "card-body">
    <p class= "text black">${data.institution}</p>
    <p class= "text-black">${data.description}</p>
    </div>
    </div>`
})