const users = [
    {
        id: 1,
        name: 'Alexandr',
        num: '11-22-33',
        age: 10,
        grades: [4, 5, 3, 3, 4]
    },
    {
        id: 2,
        name: 'Bob',
        num: '11-22-35',
        age: 19,
        grades: [4, 5, 3, 3, 4]


    },
    {
        id: 3,
        name: 'Tim',
        num: '11-22-38',
        age: 66,
        grades: [4, 5, 3, 3, 4]


    },
    {
        id: 4,
        name: 'Olga',
        num: '11-22-39',
        age: 9,
        grades: [4, 5, 3, 3, 4]

    },
]

const root = document.getElementById('wrapper')

// <div class="user">
//     <div>id = 1</div>
//     <div>name: 'Alex'</div>
// </div>

function objToHtml(userObj) {
    const rootEl = document.createElement('div')
    rootEl.classList.add('user')

    const id = document.createElement('div')
    id.innerHTML = `id = ${userObj.id}`

    const name = document.createElement('div')
    name.innerHTML = `name: ${userObj.name}`

    rootEl.appendChild(id)
    rootEl.appendChild(name)

    return rootEl
}

for (let i = 0; i < users.length; i++) {
    const currentUserObj = users[i]
    const currentUserHTML = objToHtml(currentUserObj)
    root.appendChild(currentUserHTML)
}