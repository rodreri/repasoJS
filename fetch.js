const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url, {
//     method: 'POST', //get,post put patch, delete
//     headers: {
//         'Content-Type': 'application/json',
//         'Autorization': 'Bearer'
//     },
//     body: JSON.stringify({
//         name: 'chanchito feliz',
//         website: 'google.com'
//     })
// })
//     .then((response) => response.json())
//     .then(data => console.log(data))

const fn = async () => {
    const response = await fetch(url, {
        method: 'POST', //get,post put patch, delete
        headers: {
            'Content-Type': 'application/json',
            'Autorization': 'Bearer'
        },
        body: JSON.stringify({
            name: 'chanchito feliz',
            website: 'google.com'
        })
    })
    const data = await response.json()
    console.log(data)
}
fn()