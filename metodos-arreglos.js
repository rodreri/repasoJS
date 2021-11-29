const arr = [5,1,2,3,4]

const r = arr.filter((e1, i) => {
    // console.log(i)
    return e1 > 2
})
// console.log(r)


// const mapped = arr.map((el => `<h1>${el}</h1>`))
// console.log(mapped)

const users = [
    {id: 1, name: 'chanchito feliz'},
    {id: 2, name: 'chanchito triste'},
    {id: 3, name: 'chanchito emocionado'},
    {id: 4, name: 'felipe'},
]

const mapped = users.map((user) => `<h1>${user.name}</h1>`)
// console.log(mapped)

// const r1 = arr.reduce((acc, el) => acc + el, 0)
// const getMax = (a, b) => Math.max(a,b)
// const r1 = arr.reduce(getMax, 0)
// const r1 = users.reduce((acc, el) => 
    // `${acc === '' ? '' : `${acc}, `}, ${el.name}`, '')
const r1 = users.reduce((acc, el) => {
    if(el.id < 2){
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r1)