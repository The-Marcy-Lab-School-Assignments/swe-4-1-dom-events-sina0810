const button = document.querySelector('#button-1')
const header = document.querySelector('#header')
const reset = document.querySelector('#reset')

let count = 0

button.addEventListener('click', () =>{
    {
        count++
        header.textContent = `${count}`
    }
})
reset.addEventListener('click', ()=>{
    count = 0
    header.textContent = count
})